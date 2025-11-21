import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { solarMagniferOutline, solarDownloadOutline } from '@ng-icons/solar-icons';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../models/payment.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [CommonModule, NgIconComponent, FormsModule, CurrencyPipe, DatePipe],
  templateUrl: './payment-history.html',
  styleUrls: ['./payment-history.css'],
  providers: [
    provideIcons({
      solarMagniferOutline,
      solarDownloadOutline
    })
  ]
})
export class PaymentHistoryComponent implements OnInit {
  private paymentService = inject(PaymentService);
  public allPayments: Payment[] = [];
  public filteredPayments: Payment[] = [];
  public totalBilled = 0;
  public totalPaid = 0;

  ngOnInit(): void {
    this.loadPayments();
  }

  private loadPayments(): void {
    this.paymentService.getPayments().subscribe(payments => {
      this.allPayments = payments;
      this.filteredPayments = payments;
      this.calculateTotals();
    });
  }

  private calculateTotals(): void {
    this.totalBilled = this.allPayments.reduce((acc, p) => acc + p.amount, 0);
    this.totalPaid = this.allPayments
      .filter(p => p.status === 'Paid')
      .reduce((acc, p) => acc + p.amount, 0);
  }

  public onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredPayments = this.allPayments.filter(p =>
      p.treatment?.name.toLowerCase().includes(searchTerm) ||
      new Date(p.date).toLocaleDateString().toLowerCase().includes(searchTerm)
    );
  }
}
