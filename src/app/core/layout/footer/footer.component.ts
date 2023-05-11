import { Component } from '@angular/core'
import { Modals } from '../../../shared/constants/modals'
import { ModalService } from '../../../shared/services/modal/modal.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  private modalName: Modals = Modals.profile

  constructor(private modalService: ModalService) {}

  public openModal() {
    this.modalService.setActive(this.modalName)
  }
}
