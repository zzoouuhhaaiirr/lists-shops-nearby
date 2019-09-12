import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {

  @Input() title;
  @Input() email;
  @Input() password;
 
  constructor(public activeModal: NgbActiveModal) {}
 
  ngOnInit() {
  }

}
