import { CurrencyInterface } from './currency.interface'
import { FlagInterface } from './flag.interface'

export interface CountryInterface {
  name: { common: string; official: string };
  cioc: string;
  area: number;
  capital: string[];
  independent: boolean;
  flags: FlagInterface;
  currencies: CurrencyInterface[];
  population: number;
}