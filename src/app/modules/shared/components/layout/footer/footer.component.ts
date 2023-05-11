import { Component } from '@angular/core'
import { MODAL } from '../../../constants/MODAL'
import { ModalService } from '../../../services/modal.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  private modalName: MODAL = MODAL.profile

  constructor(private modalService: ModalService) {}

  public openModal() {
    this.modalService.setActive(this.modalName)
  }
}
