import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModalService } from 'carbon-components-angular';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { ApprovalUpdateService} from '../approval-update.service';

@Component({
  selector: 'ac-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.scss']
})
export class ButtonBarComponent implements OnInit {

  constructor(private translate: TranslateService, private modalService: ModalService, private approvalUpdateService: ApprovalUpdateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    
  }

  approve() {
    this.approvalUpdateService.approve();
  }

  reject() {
    this.approvalUpdateService.reject();
  }

  openModal() {
    this.modalService.create({ component: SearchModalComponent });
  }
}
