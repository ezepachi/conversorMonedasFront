import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'assets/db.json';

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(map(data => data.currencies));
  }

  convert(fromCurrency: string, toCurrency: string, amount: number, currencies: any[]): number {
    const fromCurrencyObj = currencies.find(c => c.code === fromCurrency);
    const toCurrencyObj = currencies.find(c => c.code === toCurrency);
    if (fromCurrencyObj && toCurrencyObj) {
      return amount * (toCurrencyObj.conversionIndex / fromCurrencyObj.conversionIndex);
    }
    return 0;
  }
}
