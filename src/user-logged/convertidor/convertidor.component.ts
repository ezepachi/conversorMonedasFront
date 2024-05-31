import { Component, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Currency } from '../../interfaces/currency';

@Component({
  selector: 'app-convertidor',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './convertidor.component.html',
  styleUrl: './convertidor.component.scss'
})
export class ConvertidorComponent implements OnInit {
  currencies = signal<Currency[]>([]);
  amount = new FormControl(null);
  fromCurrency = new FormControl(null);
  toCurrency = new FormControl(null);
  convertedAmount = signal<number | null>(null);

  // Declarar la propiedad conversionForm
  conversionForm!: FormGroup; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.conversionForm = new FormGroup({ // Inicializar en ngOnInit
        amount: this.amount, 
        fromCurrency: this.fromCurrency,
        toCurrency: this.toCurrency
    });


     this.http.get<any>('assets/db/db.json').subscribe({
      next: data => this.currencies.set(data.jsonData), // Accede a jsonData
      error: error => console.error('Error loading currencies:', error)
    });
  }

    convertCurrency(): void {
        if (this.fromCurrency.value && this.toCurrency.value && this.amount.value) {
            const fromIndex = (this.fromCurrency.value as Currency).convertibilityIndex;
            const toIndex = (this.toCurrency.value as Currency).convertibilityIndex;

            this.convertedAmount.set((this.amount.value / fromIndex) * toIndex);
        } else {
            this.convertedAmount.set(null); // Reiniciar si faltan valores
        }
    }
}