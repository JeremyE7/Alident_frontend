/**
 * Dashboard Component
 */

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { solarUserOutline, solarCalendarMonthOutline, solarReceiptLongOutline, solarHistoryOutline } from '@ng-icons/solar-icons';
import { AppointmentService } from '../../services/appointment.service';
import { PaymentService } from '../../services/payment.service';
import { AuthService } from '../../services/auth.service';
import { Appointment } from '../../models/appointment.model';
import { User } from '../../models/user.model';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, NgIconComponent, DatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  providers: [
    provideIcons({
      solarUserOutline,
      solarCalendarMonthOutline,
      solarReceiptLongOutline,
      solarHistoryOutline
    })
  ]
})
export class DashboardComponent implements OnInit {
  private appointmentService = inject(AppointmentService);
  private paymentService = inject(PaymentService);
  private authService = inject(AuthService);

  public currentUser: User | null = null;
  public nextAppointment: Appointment | null = null;
  public outstandingBalance = 0;
  public recentActivity = "No recent payments or visits logged.";

  ngOnInit(): void {
    this.loadDashboardData();
    this.currentUser = this.authService.user();
  }

  private loadDashboardData(): void {
    forkJoin({
      appointments: this.appointmentService.getAppointments(),
      payments: this.paymentService.getPayments()
    }).pipe(
      map(data => {
        const upcomingAppointments = data.appointments.filter(a => new Date(a.date) > new Date());
        this.nextAppointment = upcomingAppointments.length > 0 ? upcomingAppointments[0] : null;

        const unpaidPayments = data.payments.filter(p => p.status === 'Pending');
        this.outstandingBalance = unpaidPayments.reduce((acc, p) => acc + p.amount, 0);

        if (data.payments.length > 0) {
          this.recentActivity = `Last payment on ${new Date(data.payments[0].date).toLocaleDateString()}`;
        }

        return data;
      })
    ).subscribe();
  }
}
