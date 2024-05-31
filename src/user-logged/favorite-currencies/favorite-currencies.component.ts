import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Currency } from '../../interfaces/currency';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-favorite-currencies',
    standalone: true,
    imports: [CommonModule, HttpClientModule],
    templateUrl: './favorite-currencies.component.html',
    styleUrl: './favorite-currencies.component.scss'
})
export class FavoriteCurrenciesComponent implements OnInit {
    favoriteCurrencies = signal<Currency[]>([]);
    allCurrencies = signal<Currency[]>([]);
    selectedCurrency: Currency | null = null;
    
    constructor(private http: HttpClient) { }
    
    ngOnInit(): void {
        // Cargar monedas favoritas desde el almacenamiento local (ejemplo)
        const storedFavorites = localStorage.getItem('favoriteCurrencies');
        if (storedFavorites) {
            this.favoriteCurrencies.set(JSON.parse(storedFavorites));
        }

        // Cargar todas las monedas disponibles
        this.http.get<Currency[]>('assets/db/db.json').subscribe({
            next: data => this.allCurrencies.set(data),
            error: error => console.error('Error loading currencies:', error)
        });
    }

    addFavoriteCurrency() {
        if (this.selectedCurrency && !this.isFavorite(this.selectedCurrency)) {
            this.favoriteCurrencies.update(favorites => [...favorites, this.selectedCurrency!]);
            localStorage.setItem('favoriteCurrencies', JSON.stringify(this.favoriteCurrencies()));
        }
    }

    isFavorite(currency: Currency): boolean {
        return this.favoriteCurrencies().some(fav => fav.id === currency.id);
    }
}