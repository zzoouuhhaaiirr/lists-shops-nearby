import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { LogupComponent } from '../logup/logup.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  appTitle: string = 'ShopsLogo';

  closeResult: string;
  modalOptions:NgbModalOptions;
 
  constructor(
    private modalService: NgbModal
  ){
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }

  ngOnInit() {
  }
  openlogin() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.title = 'Sign in';
    modalRef.componentInstance.email = 'Your email';
    modalRef.componentInstance.password = 'Your password';
  }
  openlogup() {
    const modalRef = this.modalService.open(LogupComponent);
    modalRef.componentInstance.title = 'Sign up';
    modalRef.componentInstance.email = 'Your email';
    modalRef.componentInstance.RepeatPassword = 'Repeat Password';
    modalRef.componentInstance.password = 'Your password';
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}

