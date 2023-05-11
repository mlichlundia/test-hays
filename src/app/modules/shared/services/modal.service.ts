import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { MODAL } from '../constants/MODAL'

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public modalState$: Subject<boolean> = new Subject<boolean>()
  public activeModal: number | null = null

  constructor() { }

  public setActive(modalName: MODAL) {
    this.activeModal = modalName
    this.open()
  }

  public close() {
    this.modalState$.next(false)
    this.activeModal = null
  }

  private open() {
    this.modalState$.next(true)
  }
}
