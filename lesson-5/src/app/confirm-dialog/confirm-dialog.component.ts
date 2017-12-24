import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() type = 'inform';
  @Input() title;
  @Input() msg;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onCancel() {
    this.activeModal.close(false);
  }

  onConfirm() {
    this.activeModal.close(true);
  }

}
