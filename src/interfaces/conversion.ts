import { Currency } from './currency';

export interface Conversion {
  fromCurrency: Currency;
  toCurrency: Currency;
  amount: number;
  convertedAmount: number;
}