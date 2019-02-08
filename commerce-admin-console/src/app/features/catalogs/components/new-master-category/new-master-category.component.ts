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

  private readonly associateHeaderIndex = {
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

  private readonly contentHeaderIndex = {
    '0': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.CONTENT_TABLE.language',
    },
    '1': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.CONTENT_TABLE.identifier',
    },
    '2': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.CONTENT_TABLE.name',
    },
    '3': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.CONTENT_TABLE.content_type',
    },
    '4': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.CONTENT_TABLE.description',
    }
  };

  private readonly referencesHeaderIndex = {
    '0': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.REFERENCES_TABLE.type',
    },
    '1': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.REFERENCES_TABLE.status',
    },
    '2': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.REFERENCES_TABLE.store',
    },
    '3': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.REFERENCES_TABLE.name',
    },
    '4': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.REFERENCES_TABLE.description',
    },
    '5': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.REFERENCES_TABLE.start_date',
    },
    '6': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.REFERENCES_TABLE.end_date',
    },
    '7': {
      'translateId': 'CATALOGS.NEW_MASTER_CATEGORY.REFERENCES_TABLE.campaign',
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

  associateTableHeader() {
    this.translationSubscription = this.translate.get([this.associateHeaderIndex['0'].translateId,
    this.associateHeaderIndex['1'].translateId,
    this.associateHeaderIndex['2'].translateId,
    this.associateHeaderIndex['3'].translateId,
    this.associateHeaderIndex['4'].translateId,
    this.associateHeaderIndex['5'].translateId,
    this.associateHeaderIndex['6'].translateId,
    this.associateHeaderIndex['7'].translateId,
    this.associateHeaderIndex['8'].translateId
    ]).subscribe((result: object) => {
      this.customModel.header = [
        new TableHeaderItem({ data: result[this.associateHeaderIndex['0'].translateId] }),
        new TableHeaderItem({ data: result[this.associateHeaderIndex['1'].translateId] }),
        new TableHeaderItem({ data: result[this.associateHeaderIndex['2'].translateId] }),
        new TableHeaderItem({ data: result[this.associateHeaderIndex['3'].translateId] }),
        new TableHeaderItem({ data: result[this.associateHeaderIndex['4'].translateId] }),
        new TableHeaderItem({ data: result[this.associateHeaderIndex['5'].translateId] }),
        new TableHeaderItem({ data: result[this.associateHeaderIndex['6'].translateId] }),
        new TableHeaderItem({ data: result[this.associateHeaderIndex['7'].translateId] }),
        new TableHeaderItem({ data: result[this.associateHeaderIndex['8'].translateId] })
      ];
    });
  }

  contentTableHeader() {
    this.translationSubscription = this.translate.get([this.contentHeaderIndex['0'].translateId,
    this.contentHeaderIndex['1'].translateId,
    this.contentHeaderIndex['2'].translateId,
    this.contentHeaderIndex['3'].translateId,
    this.contentHeaderIndex['4'].translateId
    ]).subscribe((result: object) => {
      this.customModel.header = [
        new TableHeaderItem({ data: result[this.contentHeaderIndex['0'].translateId] }),
        new TableHeaderItem({ data: result[this.contentHeaderIndex['1'].translateId] }),
        new TableHeaderItem({ data: result[this.contentHeaderIndex['2'].translateId] }),
        new TableHeaderItem({ data: result[this.contentHeaderIndex['3'].translateId] }),
        new TableHeaderItem({ data: result[this.contentHeaderIndex['4'].translateId] })
      ];
    });
  }

  referencesTableHeader() {
    this.translationSubscription = this.translate.get([this.referencesHeaderIndex['0'].translateId,
    this.referencesHeaderIndex['1'].translateId,
    this.referencesHeaderIndex['2'].translateId,
    this.referencesHeaderIndex['3'].translateId,
    this.referencesHeaderIndex['4'].translateId,
    this.referencesHeaderIndex['5'].translateId,
    this.referencesHeaderIndex['6'].translateId,
    this.referencesHeaderIndex['7'].translateId
    ]).subscribe((result: object) => {
      this.customModel.header = [
        new TableHeaderItem({ data: result[this.referencesHeaderIndex['0'].translateId] }),
        new TableHeaderItem({ data: result[this.referencesHeaderIndex['1'].translateId] }),
        new TableHeaderItem({ data: result[this.referencesHeaderIndex['2'].translateId] }),
        new TableHeaderItem({ data: result[this.referencesHeaderIndex['3'].translateId] }),
        new TableHeaderItem({ data: result[this.referencesHeaderIndex['4'].translateId] }),
        new TableHeaderItem({ data: result[this.referencesHeaderIndex['5'].translateId] }),
        new TableHeaderItem({ data: result[this.referencesHeaderIndex['6'].translateId] }),
        new TableHeaderItem({ data: result[this.referencesHeaderIndex['7'].translateId] })
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

  }
  closeMasterCategory() {
   this.router.navigate(['/catalogs']);
  }
  deleteNewRow() {}

    associateClicked() {
      this.associateTableHeader();
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
      this.contentTableHeader();
      this.customModel.data = [
        [new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''})]
      ];
    }
    referencesClicked() {
      this.referencesTableHeader();
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
