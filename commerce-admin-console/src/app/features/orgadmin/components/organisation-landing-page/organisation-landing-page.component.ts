
import { Component, OnInit, Input } from '@angular/core';
import {TableModel, TableHeaderItem, TableItem, PaginationModel } from 'carbon-components-angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-organisation-landing-page',
  templateUrl: './organisation-landing-page.component.html',
  styleUrls: ['./organisation-landing-page.component.scss']
})
export class OrganisationLandingPageComponent implements OnInit {

@Input() customModel = new TableModel();
//@Input() model = new TableModel();
@Input() size = 'md';
@Input() showSelectionColumn = true;
@Input() striped = true;
@Input() model = new PaginationModel();
@Input() skeleton = false;


constructor(private translate: TranslateService,) { }



  private readonly associateHeaderIndex = {
    '0': {
      'translateId': 'CATALOGS.ORGANIZATION.ORGNIZATION_TABLE.name',
    },
    '1': {
      'translateId': 'CATALOGS.ORGANIZATION.ORGNIZATION_TABLE.parent_organization',
    },
    '2': {
      'translateId': 'CATALOGS.ORGANIZATION.ORGNIZATION_TABLE.type',
    }
  };
  private translationSubscription: Subscription;

  associateTableHeader() {
    this.translationSubscription = this.translate.get([this.associateHeaderIndex['0'].translateId,
    this.associateHeaderIndex['1'].translateId,
    this.associateHeaderIndex['2'].translateId
    ]).subscribe((result: object) => {
      this.customModel.header = [
        new TableHeaderItem({ data: result[this.associateHeaderIndex['0'].translateId] }),
        new TableHeaderItem({ data: result[this.associateHeaderIndex['1'].translateId] }),
        new TableHeaderItem({ data: result[this.associateHeaderIndex['2'].translateId] })
      ];
    });
  }
 

  ngOnInit() {
    this.associateTableHeader();
    this.customModel.data = [
      [new TableItem({data: ''}),
      new TableItem({data: ''}),
      new TableItem({data: ''})]
    ];
  }

}

