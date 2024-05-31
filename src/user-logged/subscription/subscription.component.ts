import { Component, OnInit, signal  } from '@angular/core';
import { CardSubscriptionComponent } from '../../components/card-subscription/card-subscription.component';
import { Subscription } from '../../interfaces/subscription';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-subscription',
  standalone: true,
    imports: [CardSubscriptionComponent, CommonModule, HttpClientModule],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss'
})
export class SubscriptionComponent implements OnInit{
    subscriptions = signal<Subscription[]>([]);

    constructor(private http: HttpClient) { }
    ngOnInit(): void {
       this.http.get<Subscription[]>('assets/db/subscription.json').subscribe({
          next: data => this.subscriptions.set(data),
         error: error => console.error('Error loading subscriptions:', error)
    });
    }
    
    onSubscriptionSelected(subscription: Subscription) {
        console.log('Subscripción seleccionada:', subscription);
    }


}
