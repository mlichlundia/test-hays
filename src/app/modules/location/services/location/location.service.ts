import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { REGIONS } from '../../constants/regions'
import { GET_COUNTRIES_URL } from '../../constants/urls'
import { CountryInterface } from '../../types-interfaces/country.interface'
import { RegionInterface, RegionType } from '../../types-interfaces/region.interface'

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public regions: RegionInterface[] = REGIONS

  constructor(private http: HttpClient) { }

  public getCountries(region: RegionType): Observable<CountryInterface[]> {
    return this.http.get<CountryInterface[]>(GET_COUNTRIES_URL + region)
  }
}
