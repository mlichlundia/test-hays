import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { delay, Observable, switchMap, tap } from 'rxjs'
import { LocationService } from '../../../../shared/services/location/location.service'
import { CountryInterface } from '../../interfaces/country.interface'
import { RegionInterface } from '../../../region/interface/region.interface'

@Component({
  selector: 'app-country-list-view',
  templateUrl: './country-list-view.component.html',
  styleUrls: ['./country-list-view.component.scss']
})
export class CountryListViewComponent implements OnInit {
  public region!: RegionInterface | null
  public countries!: Observable<CountryInterface[]>

  constructor(private route: ActivatedRoute, private locationService: LocationService) {}

  ngOnInit() {
    this.countries = this.route.params.pipe(
      delay(0),
      tap((params) => this.region = this.locationService.regions.find(region => region.name === params['name'])!),
      switchMap((params: Params) => this.locationService.getCountries(params['name'])))
  }
}
