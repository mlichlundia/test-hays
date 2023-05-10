import { Component } from '@angular/core'
import { Location } from '@angular/common'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isBackShown: boolean = false

  constructor(private location: Location, private router: Router) {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
      if (event.url === '/') {
        this.isBackShown = false
        return
      }

      this.isBackShown = true
    })
  }

  public goBack() {
    this.location.back()
  }
}
