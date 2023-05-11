import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Subject, switchMap, takeUntil } from 'rxjs'
import { LocationService } from '../../../../shared/services/location/location.service'
import { CountryInterface } from '../../interfaces/country.interface'

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.scss']
})
export class CountryViewComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject()
  public country!: CountryInterface

  constructor(private route: ActivatedRoute, private locationService: LocationService) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => this.locationService.getCountry(params['code'])),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(country => this.country = country)
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }
}
