import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModalService } from 'carbon-components-angular';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { Router } from '@angular/router';
import { HelpLinksConstants } from '../../../../components/help-links/help-links.constants';

@Component({
  selector: 'ac-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.scss']
})
export class ButtonBarComponent implements OnInit {
	
  readonly USER_HELPLINKS = HelpLinksConstants.USER_HELP_LINK;

  constructor(private modalService: ModalService, private translate: TranslateService, private router: Router) { 
    translate.setDefaultLang('en');
  }

  ngOnInit() {

  }

  public addUser() {
    this.router.navigate(['/users/add-user']);
  }
  
  public openSearchModal() {
    this.modalService.create({
			component: SearchModalComponent
		});
  }

}
