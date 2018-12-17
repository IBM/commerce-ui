import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-help-links',
  templateUrl: './help-links.component.html',
  styleUrls: ['./help-links.component.scss']
})

export class HelpLinksComponent implements OnInit {
  
  constructor ( private translateService: TranslateService) {
      this.translateService.setDefaultLang('en');
  }
  
  ngOnInit() {
  }

}
