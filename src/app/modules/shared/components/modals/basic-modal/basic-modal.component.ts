import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subject, takeUntil } from 'rxjs'
import { MODAL } from '../../../constants/MODAL'
import { ModalService } from '../../../services/modal.service'

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.scss']
})
export class BasicModalComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>()
  public MODALS = MODAL

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.modalState$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe()
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
  }

  public closeModal() {
    this.modalService.close()
  }
}