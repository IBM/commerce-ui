import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import {TableModel, TableHeaderItem, TableItem } from 'carbon-components-angular';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'ac-default-catalog',
  templateUrl: './default-catalog.component.html',
  styleUrls: ['./default-catalog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DefaultCatalogComponent implements OnInit {
  @Input() model = new TableModel();
  @Input() customModel = new TableModel();
  @ViewChild('customHeaderTemplate')
protected customHeaderTemplate: TemplateRef<any>;
@ViewChild('customTableItemTemplate')
protected customTableItemTemplate: TemplateRef<any>;
  constructor(private translate: TranslateService, private router: Router) { }
  disableInput = true;

  private readonly inheritedTableIndex = {
    '0': {
      'translateId': 'CATALOGS.DEFAULT_CATALOG.INHERITED_TABLE.type',
    },
    '1': {
      'translateId': 'CATALOGS.DEFAULT_CATALOG.INHERITED_TABLE.store',
    },
    '2': {
      'translateId': 'CATALOGS.DEFAULT_CATALOG.INHERITED_TABLE.unique_id',
    },
    '3': {
      'translateId': 'CATALOGS.DEFAULT_CATALOG.INHERITED_TABLE.code',
    },
    '4': {
      'translateId': 'CATALOGS.DEFAULT_CATALOG.INHERITED_TABLE.name',
    },
  };

  private translationSubscription: Subscription;

  inheritedTableHeader() {
    this.translationSubscription = this.translate.get([this.inheritedTableIndex['0'].translateId,
    this.inheritedTableIndex['1'].translateId,
    this.inheritedTableIndex['2'].translateId,
    this.inheritedTableIndex['3'].translateId,
    this.inheritedTableIndex['4'].translateId
    ]).subscribe((result: object) => {
      this.model.header = [
        new TableHeaderItem({ data: result[this.inheritedTableIndex['0'].translateId] }),
        new TableHeaderItem({ data: result[this.inheritedTableIndex['1'].translateId] }),
        new TableHeaderItem({ data: result[this.inheritedTableIndex['2'].translateId] }),
        new TableHeaderItem({ data: result[this.inheritedTableIndex['3'].translateId] }),
        new TableHeaderItem({ data: result[this.inheritedTableIndex['4'].translateId] })
      ];
    });
  }
  defaultTableHeader() {
    this.translationSubscription = this.translate.get([this.inheritedTableIndex['0'].translateId,
    this.inheritedTableIndex['1'].translateId,
    this.inheritedTableIndex['2'].translateId,
    this.inheritedTableIndex['3'].translateId,
    this.inheritedTableIndex['4'].translateId
    ]).subscribe((result: object) => {
      this.customModel.header = [
        new TableHeaderItem({ data: result[this.inheritedTableIndex['0'].translateId] }),
        new TableHeaderItem({ data: result[this.inheritedTableIndex['1'].translateId] }),
        new TableHeaderItem({ data: result[this.inheritedTableIndex['2'].translateId] }),
        new TableHeaderItem({ data: result[this.inheritedTableIndex['3'].translateId] }),
        new TableHeaderItem({ data: result[this.inheritedTableIndex['4'].translateId] })
      ];
    });
  }
  inheritedTableCall() {
    this.inheritedTableHeader();
    this.model.data = [
      [new TableItem({data: '', template: this.customTableItemTemplate}),
      new TableItem({data: '', template: this.customTableItemTemplate}),
      new TableItem({data: '', template: this.customTableItemTemplate}),
      new TableItem({data: '', template: this.customTableItemTemplate}),
      new TableItem({data: '', template: this.customTableItemTemplate})]
    ];
  }

defaultTableCall() {
  this.defaultTableHeader();
    this.customModel.data = [
      [new TableItem({data: '', template: this.customTableItemTemplate}),
      new TableItem({data: 'ExtendedSitesCatalogAssetStore', template: this.customTableItemTemplate}),
      new TableItem({data: '10001', template: this.customTableItemTemplate}),
      new TableItem({data: 'ExtendedSitesCatalogAssetStore Catalog', template: this.customTableItemTemplate}),
      new TableItem({data: 'ExtendedSitesCatalogAssetStore', template: this.customTableItemTemplate})]
    ];
}
  ngOnInit() {
    this.inheritedTableCall();
    this.defaultTableCall();
  }

  onSelect() {
    this.router.navigate(['/catalogs/extendedSite']);
  }
}
