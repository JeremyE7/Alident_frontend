import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { solarAddCircleOutline, solarAltArrowLeftOutline, solarAltArrowRightOutline } from '@ng-icons/solar-icons';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models/appointment.model';

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isSelected: boolean;
}

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, NgIconComponent, DatePipe],
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.css'],
  providers: [
    provideIcons({
      solarAddCircleOutline,
      solarAltArrowLeftOutline,
      solarAltArrowRightOutline
    })
  ]
})
export class AppointmentsComponent implements OnInit {
  private appointmentService = inject(AppointmentService);

  public allAppointments: Appointment[] = [];
  public displayedAppointments: Appointment[] = [];
  public showingUpcoming = true;

  public currentMonth: Date = new Date();
  public calendar: { weekdays: string[], days: CalendarDay[] } = { weekdays: [], days: [] };
  public selectedDate: Date = new Date();
  public availableSlots: string[] = [];

  ngOnInit(): void {
    this.loadAppointments();
    this.generateCalendar();
  }

  private loadAppointments(): void {
    this.appointmentService.getAppointments().subscribe(appointments => {
      this.allAppointments = appointments;
      this.filterAppointments();
    });
  }

  public filterAppointments(): void {
    const now = new Date();
    if (this.showingUpcoming) {
      this.displayedAppointments = this.allAppointments.filter(a => new Date(a.date) >= now);
    } else {
      this.displayedAppointments = this.allAppointments.filter(a => new Date(a.date) < now);
    }
  }

  public showUpcoming(): void {
    this.showingUpcoming = true;
    this.filterAppointments();
  }

  public showPast(): void {
    this.showingUpcoming = false;
    this.filterAppointments();
  }

  public generateCalendar(): void {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const days: CalendarDay[] = [];

    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      days.push({
        date: date,
        isCurrentMonth: date.getMonth() === month,
        isSelected: date.toDateString() === this.selectedDate.toDateString()
      });
    }

    this.calendar = { weekdays, days };
  }

  public changeMonth(delta: number): void {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + delta);
    this.generateCalendar();
  }

  public selectDate(day: CalendarDay): void {
    this.selectedDate = day.date;
    this.generateCalendar(); // Re-generate to update isSelected
    this.fetchAvailableSlots();
  }

  private fetchAvailableSlots(): void {
    this.appointmentService.getAvailableSlots(this.selectedDate).subscribe(slots => {
      this.availableSlots = slots;
    });
  }
}
