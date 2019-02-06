import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import {TableModel, TableHeaderItem, TableItem } from 'carbon-components-angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { MasterCategoryService } from '../../services/masterCategory/master-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-new-master-category',
  templateUrl: './new-master-category.component.html',
    styleUrls: ['./new-master-category.component.scss'],
})
export class NewMasterCategoryComponent implements OnInit {

@ViewChild('customHeaderTemplate')
protected customHeaderTemplate: TemplateRef<any>;
@ViewChild('customTableItemTemplate')
protected customTableItemTemplate: TemplateRef<any>;
@Input() customModel = new TableModel();
@Input() model = new TableModel();
@Input() size = 'md';
@Input() showSelectionColumn = true;
@Input() striped = true;

  title: 'NewMasterCotegory';
  code = '';
  name = '';
  description = '';
  thumbnail = '';
  image = '';
  keyword = '';
  pageTitle = '';
  metaDesc = '';
  imgAltText = '';
  disableInput = true;
  showAssociate: boolean;
  showContent: boolean;
  showReferences: boolean;
  showAssociateEdit: boolean;
  showContentEdit: boolean;
  showReferencesEdit: boolean;
  masterInputData = [];

  constructor(private translate: TranslateService,
     private masterCategoryService: MasterCategoryService,
     private router: Router) { }

  private readonly headerIndex = {
    '0': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.ASSOCIATE_TABLE.sequence',
    },
    '1': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.ASSOCIATE_TABLE.type',
    },
    '2': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.ASSOCIATE_TABLE.store',
    },
    '3': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.ASSOCIATE_TABLE.path',
    },
    '4': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.ASSOCIATE_TABLE.code',
    },
    '5': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.ASSOCIATE_TABLE.usage',
    },
    '6': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.ASSOCIATE_TABLE.administative_name',
    },
    '7': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.ASSOCIATE_TABLE.display_name',
    },
    '8': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.ASSOCIATE_TABLE.short_description',
    }
  };
  listItems = [{
    content: 'Show All',
    selected: false
      },
      {
    content: 'AuroraESite',
    selected: false,
      },
      {
    content: 'ExtendedSitesCatalogAssetStore',
          selected: false
      }
    ];

  private translationSubscription: Subscription;

  populateTableHeader() {
    this.translationSubscription = this.translate.get([this.headerIndex['0'].translateId,
    this.headerIndex['1'].translateId,
    this.headerIndex['2'].translateId,
    this.headerIndex['3'].translateId,
    this.headerIndex['4'].translateId,
    this.headerIndex['5'].translateId,
    this.headerIndex['6'].translateId,
    this.headerIndex['7'].translateId,
    this.headerIndex['8'].translateId
    ]).subscribe((result: object) => {
      this.customModel.header = [
        new TableHeaderItem({ data: result[this.headerIndex['0'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['1'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['2'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['3'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['4'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['5'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['6'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['7'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['8'].translateId] })
      ];
    });
  }

    saveMasterData() {
      this.masterInputData = [
          {'code': this.code, 'name': this.name, 'descreption': this.description,
          'thumbnail': this.thumbnail, 'image': this.image, 'keyword': this.keyword,
          'pageTitle': this.pageTitle, 'metaDesc': this.metaDesc, 'imgAltText': this.imgAltText}
      ];
      this.masterCategoryService.categoryListTableData.push(this.masterInputData);
      console.log(this.masterCategoryService.categoryListTableData);
  }

  ngOnInit() {
    this.showAssociate = true;
    this.showContent = true;
    this.showReferences = true;
    this.showAssociateEdit = false;
    this.showContentEdit = false;
    this.showReferencesEdit = false;

    //   this.customModel.data = [
    //     [new TableItem({data: ''}), new TableItem({data: ''}), new TableItem({data: ''}), new TableItem({data: ''}),
    //     new TableItem({data: ''}), new TableItem({data: ''}), new TableItem({data: ''}), new TableItem({data: ''}),
    //     new TableItem({data: ''})]
    //   ];
  }
  closeMasterCategory() {
   this.router.navigate(['/catalogs']);
  }
  deleteNewRow() {}

    associateClicked() {
      // this.customModel.header = [
      //   new TableHeaderItem({ data: 'Sequence'}),
      //   new TableHeaderItem({ data: '*Type'}),
      //   new TableHeaderItem({ data: 'Store', template: this.customHeaderTemplate}),
      //   new TableHeaderItem({ data: 'Path'}),
      //   new TableHeaderItem({ data: 'Code'}),
      //   new TableHeaderItem({ data: 'Usage'}),
      //   new TableHeaderItem({ data: 'Administative name (United State English)'}),
      //   new TableHeaderItem({ data: 'Display name (United State English)'}),
      //   new TableHeaderItem({ data: 'Short description (United State English)'})
      // ];
      this.populateTableHeader();
      this.customModel.data = [
        [new TableItem({data: '', template: this.customTableItemTemplate}),
        new TableItem({data: ''}),
        new TableItem({data: '', template: this.customTableItemTemplate}),
        new TableItem({data: '', template: this.customTableItemTemplate}),
        new TableItem({data: '', template: this.customTableItemTemplate}),
        new TableItem({data: '', template: this.customTableItemTemplate}),
        new TableItem({data: '', template: this.customTableItemTemplate}),
        new TableItem({data: '', template: this.customTableItemTemplate}),
        new TableItem({data: '', template: this.customTableItemTemplate})]
      ];
    }
    contentClicked() {
      this.customModel.header = [
        new TableHeaderItem({ data: 'Language'}),
        new TableHeaderItem({ data: 'Identifier'}),
        new TableHeaderItem({ data: 'Name'}),
        new TableHeaderItem({ data: 'Content Type'}),
        new TableHeaderItem({ data: 'Description'})
      ];
      this.customModel.data = [
        [new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''})]
      ];
    }
    referencesClicked() {
      this.customModel.header = [
        new TableHeaderItem({ data: '*Type'}),
        new TableHeaderItem({ data: 'Status'}),
        new TableHeaderItem({ data: 'Store'}),
        new TableHeaderItem({ data: 'Name'}),
        new TableHeaderItem({ data: 'Description'}),
        new TableHeaderItem({ data: 'Start Date'}),
        new TableHeaderItem({ data: 'End Date'}),
        new TableHeaderItem({ data: 'Campaign'})
      ];
      this.customModel.data = [
        [new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''})]
      ];
    }
}
