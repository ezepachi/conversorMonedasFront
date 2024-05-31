import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from '../../interfaces/subscription';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-card-subscription',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './card-subscription.component.html',
    styleUrl: './card-subscription.component.scss'
})
export class CardSubscriptionComponent {
        @Input () subscription!: Subscription; // Recibir los datos de la suscripción
        @Output() subscriptionSelected = new EventEmitter<Subscription>();

        selectSubscription() {
        this.subscriptionSelected.emit(this.subscription); // Emite el objeto Subscription completo
        }
}
