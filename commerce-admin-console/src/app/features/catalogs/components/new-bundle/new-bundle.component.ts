import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import {TableModel, TableHeaderItem, TableItem } from 'carbon-components-angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { MasterCategoryService } from '../../services/masterCategory/master-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-bundle',
  templateUrl: './new-bundle.component.html',
  styleUrls: ['./new-bundle.component.scss']
})
export class NewBundleComponent implements OnInit {


  
  @ViewChild('customHeaderTemplate')
  protected customHeaderTemplate: TemplateRef<any>;
  @ViewChild('customTableItemTemplate')
  protected customTableItemTemplate: TemplateRef<any>;
  @ViewChild('paginationTableItemTemplate')
    protected paginationTableItemTemplate: TemplateRef<any>;
  @Input() customModel = new TableModel();
  @Input() model = new TableModel();
  @Input() size = 'md';
  @Input() showSelectionColumn = true;
  @Input() striped = true;
  
    title: 'NewMasterCotegory';
    sequence = '';
    type = '';
    displaytocustomer = '';
    store = '';
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
    masterDataSaves = false;
    value='';
  
    constructor(private translate: TranslateService,
       private masterCategoryService: MasterCategoryService,
       private router: Router) { }
  
       private readonly listPricingHeaderIndex = {
        '0': {
          'translateId': 'CATALOGS.PRODUCT.LIST_PRICING_TABLE.usd',
        },
        '1': {
          'translateId': 'CATALOGS.PRODUCT.LIST_PRICING_TABLE.aud',
        },
        '2': {
          'translateId': 'CATALOGS.PRODUCT.LIST_PRICING_TABLE.brl',
        },
        '3': {
          'translateId': 'CATALOGS.PRODUCT.LIST_PRICING_TABLE.cad',
        },
        '4': {
          'translateId': 'CATALOGS.PRODUCT.LIST_PRICING_TABLE.cny',
        },
        '5': {
          'translateId': 'CATALOGS.PRODUCT.LIST_PRICING_TABLE.eur',
        },
        '6': {
          'translateId': 'CATALOGS.PRODUCT.LIST_PRICING_TABLE.gbp',
        },
        '7': {
          'translateId': 'CATALOGS.PRODUCT.LIST_PRICING_TABLE.jpy',
        },
        '8': {
          'translateId': 'CATALOGS.PRODUCT.LIST_PRICING_TABLE.krw',
        },
        '9': {
          'translateId': 'CATALOGS.PRODUCT.LIST_PRICING_TABLE.nzd',
        },
        '10': {
          'translateId': 'CATALOGS.PRODUCT.LIST_PRICING_TABLE.pln',
        },
        '11': {
          'translateId': 'CATALOGS.PRODUCT.LIST_PRICING_TABLE.ron',
        },
        '12': {
          'translateId': 'CATALOGS.PRODUCT.LIST_PRICING_TABLE.rub',
        },
        '13': {
          'translateId': 'CATALOGS.PRODUCT.LIST_PRICING_TABLE.twd'
        }
      };
  
      private readonly offerPricingHeaderIndex = {
        '0': {
          'translateId': 'CATALOGS.PRODUCT.OFFER_PRICING_TABLE.usd',
        },
        '1': {
          'translateId': 'CATALOGS.PRODUCT.OFFER_PRICING_TABLE.aud',
        },
        '2': {
          'translateId': 'CATALOGS.PRODUCT.OFFER_PRICING_TABLE.brl',
        },
        '3': {
          'translateId': 'CATALOGS.PRODUCT.OFFER_PRICING_TABLE.cad',
        },
        '4': {
          'translateId': 'CATALOGS.PRODUCT.OFFER_PRICING_TABLE.cny',
        },
        '5': {
          'translateId': 'CATALOGS.PRODUCT.OFFER_PRICING_TABLE.eur',
        },
        '6': {
          'translateId': 'CATALOGS.PRODUCT.OFFER_PRICING_TABLE.gbp',
        },
        '7': {
          'translateId': 'CATALOGS.PRODUCT.OFFER_PRICING_TABLE.jpy',
        },
        '8': {
          'translateId': 'CATALOGS.PRODUCT.OFFER_PRICING_TABLE.krw',
        },
        '9': {
          'translateId': 'CATALOGS.PRODUCT.OFFER_PRICING_TABLE.nzd',
        },
        '10': {
          'translateId': 'CATALOGS.PRODUCT.OFFER_PRICING_TABLE.pln',
        },
        '11': {
          'translateId': 'CATALOGS.PRODUCT.OFFER_PRICING_TABLE.ron',
        },
        '12': {
          'translateId': 'CATALOGS.PRODUCT.OFFER_PRICING_TABLE.rub',
        },
        '13': {
          'translateId': 'CATALOGS.PRODUCT.OFFER_PRICING_TABLE.twd',
        },
        '14': {
          'translateId': 'CATALOGS.PRODUCT.OFFER_PRICING_TABLE.minimum_quantity',
        },
        '15': {
          'translateId': 'CATALOGS.PRODUCT.OFFER_PRICING_TABLE.maximum_quantity'
        }
      };
      private readonly descriptiveheaderIndex = {
        '0': {
          'translateId': 'CATALOGS.PRODUCT.DESCRIPTIVE_TABLE.sequence',
        },
        '1': {
          'translateId': 'CATALOGS.PRODUCT.DESCRIPTIVE_TABLE.type'
        },
        '2': {
          'translateId': 'CATALOGS.PRODUCT.DESCRIPTIVE_TABLE.code'
        },  
        '3': {
          'translateId': 'CATALOGS.PRODUCT.DESCRIPTIVE_TABLE.name'
        },
        '4': {
          'translateId': 'CATALOGS.PRODUCT.DESCRIPTIVE_TABLE.data_type'
        },
        '5': {
          'translateId': 'CATALOGS.PRODUCT.DESCRIPTIVE_TABLE.value'
        }
      };
      private readonly definingheaderIndex = {
        '0': {
          'translateId': 'CATALOGS.PRODUCT.DEFINING_TABLE.sequence',
        },
        '1': {
          'translateId': 'CATALOGS.PRODUCT.DEFINING_TABLE.type'
        },
        '2': {
          'translateId': 'CATALOGS.PRODUCT.DEFINING_TABLE.code'
        },  
        '3': {
          'translateId': 'CATALOGS.PRODUCT.DEFINING_TABLE.name'
        },
        '4': {
          'translateId': 'CATALOGS.PRODUCT.DEFINING_TABLE.data_type'
        },
        '5': {
          'translateId': 'CATALOGS.PRODUCT.DEFINING_TABLE.displayable'
        },
        '6': {
          'translateId': 'CATALOGS.PRODUCT.DEFINING_TABLE.use_in_faceted_navigation'
        },
        '7': {
          'translateId': 'CATALOGS.PRODUCT.DEFINING_TABLE.searchable_in_storefront'
        },
        '8': {
          'translateId': 'CATALOGS.PRODUCT.DEFINING_TABLE.use_in_merchandising'
        },
        '9': {
          'translateId': 'CATALOGS.PRODUCT.DEFINING_TABLE.use_as_a_ribbon_ad'
        },
        '10': {
          'translateId': 'CATALOGS.PRODUCT.DEFINING_TABLE.comparable'
        }
        
      };
    private readonly associateHeaderIndex = {
      '0': {
        'translateId': 'CATALOGS.PRODUCT.ASSOCIATE_TABLE.sequence',
      },
      '1': {
        'translateId': 'CATALOGS.PRODUCT.ASSOCIATE_TABLE.type',
      },
      '2': {
        'translateId': 'CATALOGS.PRODUCT.ASSOCIATE_TABLE.store',
      },
      '3': {
        'translateId': 'CATALOGS.PRODUCT.ASSOCIATE_TABLE.path',
      },
      '4': {
        'translateId': 'CATALOGS.PRODUCT.ASSOCIATE_TABLE.code',
      },
      '5': {
        'translateId': 'CATALOGS.PRODUCT.ASSOCIATE_TABLE.usage',
      },
      '6': {
        'translateId': 'CATALOGS.PRODUCT.ASSOCIATE_TABLE.administative_name',
      },
      '7': {
        'translateId': 'CATALOGS.PRODUCT.ASSOCIATE_TABLE.display_name',
      },
      '8': {
        'translateId': 'CATALOGS.PRODUCT.ASSOCIATE_TABLE.short_description',
      }
    };
  
    private readonly contentHeaderIndex = {
      '0': {
        'translateId': 'CATALOGS.PRODUCT.CONTENT_TABLE.language',
      },
      '1': {
        'translateId': 'CATALOGS.PRODUCT.CONTENT_TABLE.identifier',
      },
      '2': {
        'translateId': 'CATALOGS.PRODUCT.CONTENT_TABLE.name',
      },
      '3': {
        'translateId': 'CATALOGS.PRODUCT.CONTENT_TABLE.content_type',
      },
      '4': {
        'translateId': 'CATALOGS.PRODUCT.CONTENT_TABLE.description',
      }
    };
  
    private readonly referencesHeaderIndex = {
      '0': {
        'translateId': 'CATALOGS.PRODUCT.REFERENCES_TABLE.type',
      },
      '1': {
        'translateId': 'CATALOGS.PRODUCT.REFERENCES_TABLE.status',
      },
      '2': {
        'translateId': 'CATALOGS.PRODUCT.REFERENCES_TABLE.store',
      },
      '3': {
        'translateId': 'CATALOGS.PRODUCT.REFERENCES_TABLE.name',
      },
      '4': {
        'translateId': 'CATALOGS.PRODUCT.REFERENCES_TABLE.description',
      },
      '5': {
        'translateId': 'CATALOGS.PRODUCT.REFERENCES_TABLE.start_date',
      },
      '6': {
        'translateId': 'CATALOGS.PRODUCT.REFERENCES_TABLE.end_date',
      },
      '7': {
        'translateId': 'CATALOGS.PRODUCT.REFERENCES_TABLE.campaign',
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
  
    listPricingTableHeader() {
      this.offerPricingTableHeader();
      this.translationSubscription = this.translate.get([this.listPricingHeaderIndex['0'].translateId,
      this.listPricingHeaderIndex['1'].translateId,
      this.listPricingHeaderIndex['2'].translateId,
      this.listPricingHeaderIndex['3'].translateId,
      this.listPricingHeaderIndex['4'].translateId,
      this.listPricingHeaderIndex['5'].translateId,
      this.listPricingHeaderIndex['6'].translateId,
      this.listPricingHeaderIndex['7'].translateId,
      this.listPricingHeaderIndex['8'].translateId,
      this.listPricingHeaderIndex['9'].translateId,
      this.listPricingHeaderIndex['10'].translateId,
      this.listPricingHeaderIndex['11'].translateId,
      this.listPricingHeaderIndex['12'].translateId,
      this.listPricingHeaderIndex['13'].translateId
      ]).subscribe((result: object) => {
        this.customModel.header = [
          new TableHeaderItem({ data: result[this.listPricingHeaderIndex['0'].translateId] }),
          new TableHeaderItem({ data: result[this.listPricingHeaderIndex['1'].translateId] }),
          new TableHeaderItem({ data: result[this.listPricingHeaderIndex['2'].translateId] }),
          new TableHeaderItem({ data: result[this.listPricingHeaderIndex['3'].translateId] }),
          new TableHeaderItem({ data: result[this.listPricingHeaderIndex['4'].translateId] }),
          new TableHeaderItem({ data: result[this.listPricingHeaderIndex['5'].translateId] }),
          new TableHeaderItem({ data: result[this.listPricingHeaderIndex['6'].translateId] }),
          new TableHeaderItem({ data: result[this.listPricingHeaderIndex['7'].translateId] }),
          new TableHeaderItem({ data: result[this.listPricingHeaderIndex['8'].translateId] }),
          new TableHeaderItem({ data: result[this.listPricingHeaderIndex['9'].translateId] }),
          new TableHeaderItem({ data: result[this.listPricingHeaderIndex['10'].translateId] }),
          new TableHeaderItem({ data: result[this.listPricingHeaderIndex['11'].translateId] }),
          new TableHeaderItem({ data: result[this.listPricingHeaderIndex['12'].translateId] }),
          new TableHeaderItem({ data: result[this.listPricingHeaderIndex['13'].translateId] })
  
        ];
      });
    }
  
    offerPricingTableHeader() {
      this.translationSubscription = this.translate.get([this.offerPricingHeaderIndex['0'].translateId,
      this.offerPricingHeaderIndex['1'].translateId,
      this.offerPricingHeaderIndex['2'].translateId,
      this.offerPricingHeaderIndex['3'].translateId,
      this.offerPricingHeaderIndex['4'].translateId,
      this.offerPricingHeaderIndex['5'].translateId,
      this.offerPricingHeaderIndex['6'].translateId,
      this.offerPricingHeaderIndex['7'].translateId,
      this.offerPricingHeaderIndex['8'].translateId,
      this.offerPricingHeaderIndex['9'].translateId,
      this.offerPricingHeaderIndex['10'].translateId,
      this.offerPricingHeaderIndex['11'].translateId,
      this.offerPricingHeaderIndex['12'].translateId,
      this.offerPricingHeaderIndex['13'].translateId,
      this.offerPricingHeaderIndex['14'].translateId,
      this.offerPricingHeaderIndex['15'].translateId
      ]).subscribe((result: object) => {
        this.customModel.header = [
          new TableHeaderItem({ data: result[this.offerPricingHeaderIndex['0'].translateId] }),
          new TableHeaderItem({ data: result[this.offerPricingHeaderIndex['1'].translateId] }),
          new TableHeaderItem({ data: result[this.offerPricingHeaderIndex['2'].translateId] }),
          new TableHeaderItem({ data: result[this.offerPricingHeaderIndex['3'].translateId] }),
          new TableHeaderItem({ data: result[this.offerPricingHeaderIndex['4'].translateId] }),
          new TableHeaderItem({ data: result[this.offerPricingHeaderIndex['5'].translateId] }),
          new TableHeaderItem({ data: result[this.offerPricingHeaderIndex['6'].translateId] }),
          new TableHeaderItem({ data: result[this.offerPricingHeaderIndex['7'].translateId] }),
          new TableHeaderItem({ data: result[this.offerPricingHeaderIndex['8'].translateId] }),
          new TableHeaderItem({ data: result[this.offerPricingHeaderIndex['9'].translateId] }),
          new TableHeaderItem({ data: result[this.offerPricingHeaderIndex['10'].translateId] }),
          new TableHeaderItem({ data: result[this.offerPricingHeaderIndex['11'].translateId] }),
          new TableHeaderItem({ data: result[this.offerPricingHeaderIndex['12'].translateId] }),
          new TableHeaderItem({ data: result[this.offerPricingHeaderIndex['13'].translateId] }),
          new TableHeaderItem({ data: result[this.offerPricingHeaderIndex['14'].translateId] }),
          new TableHeaderItem({ data: result[this.offerPricingHeaderIndex['15'].translateId] }),
  
  
        ];
      });
    }
  
    descriptiveTableHeader() {
      this.translationSubscription = this.translate.get([this.descriptiveheaderIndex['0'].translateId,
      this.descriptiveheaderIndex['1'].translateId,
      this.descriptiveheaderIndex['2'].translateId,
      this.descriptiveheaderIndex['3'].translateId,
      this.descriptiveheaderIndex['4'].translateId,
      this.descriptiveheaderIndex['5'].translateId
      ]).subscribe((result: object) => {
        this.customModel.header = [
          new TableHeaderItem({ data: result[this.descriptiveheaderIndex['0'].translateId] }),
          new TableHeaderItem({ data: result[this.descriptiveheaderIndex['1'].translateId] }),
          new TableHeaderItem({ data: result[this.descriptiveheaderIndex['2'].translateId] }),
          new TableHeaderItem({ data: result[this.descriptiveheaderIndex['3'].translateId] }),
          new TableHeaderItem({ data: result[this.descriptiveheaderIndex['4'].translateId] }),
          new TableHeaderItem({ data: result[this.descriptiveheaderIndex['5'].translateId] })
        ];
      });
    }
    definingTableHeader() {
      this.translationSubscription = this.translate.get([this. definingheaderIndex['0'].translateId,
      this. definingheaderIndex['1'].translateId,
      this. definingheaderIndex['2'].translateId,
      this. definingheaderIndex['3'].translateId,
      this. definingheaderIndex['4'].translateId,
      this. definingheaderIndex['5'].translateId,
      this. definingheaderIndex['6'].translateId,
      this. definingheaderIndex['7'].translateId,
      this. definingheaderIndex['8'].translateId,
      this. definingheaderIndex['9'].translateId,
      this. definingheaderIndex['10'].translateId,
  
      ]).subscribe((result: object) => {
        this.customModel.header = [
          new TableHeaderItem({ data: result[this. definingheaderIndex['0'].translateId] }),
          new TableHeaderItem({ data: result[this. definingheaderIndex['1'].translateId] }),
          new TableHeaderItem({ data: result[this. definingheaderIndex['2'].translateId] }),
          new TableHeaderItem({ data: result[this. definingheaderIndex['3'].translateId] }),
          new TableHeaderItem({ data: result[this. definingheaderIndex['4'].translateId] }),
          new TableHeaderItem({ data: result[this. definingheaderIndex['5'].translateId] }),
          new TableHeaderItem({ data: result[this. definingheaderIndex['6'].translateId] }),
          new TableHeaderItem({ data: result[this. definingheaderIndex['7'].translateId] }),
          new TableHeaderItem({ data: result[this. definingheaderIndex['8'].translateId] }),
          new TableHeaderItem({ data: result[this. definingheaderIndex['9'].translateId] }),
          new TableHeaderItem({ data: result[this. definingheaderIndex['10'].translateId] }),
  
        ];
      });
    }
  
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
            {'sequence': this.sequence, 'code': this.code, 'name': this.name, 'descreption': this.description,
            'thumbnail': this.thumbnail, 'image': this.image, 'keyword': this.keyword,
            'pageTitle': this.pageTitle, 'metaDesc': this.metaDesc, 'imgAltText': this.imgAltText}
        ];
        // addRow() {
          // const lastRowCopy = this.customModel.row(this.customModel.data.length + 1);
          // this.customModel.addRow(lastRowCopy);
        // }
        this.masterCategoryService.categoryListTableData.push(this.masterInputData);
        console.log(this.masterCategoryService.categoryListTableData);
        this.masterDataSaves = true;
    }
    navigateExtendedSite() {
      this.router.navigate(['/catalogs/extendedSite']);
    }
    // protected prepareData(data: Array<Array<any>>) {
    //   // create new data from the service data
    //   let newData = [];
    //   data.forEach(dataRow => {
    //     let row = [];
    //     dataRow.forEach(dataElement => {
    //       row.push(
    //         new TableItem({
    //           data: dataElement,
    //           template: typeof dataElement === 'string' ? undefined : this.paginationTableItemTemplate,
    //           // your template can handle all the data types so you don't have to conditionally set it
    //           // you can also set different templates for different columns based on index
    //         })
    //       );
    //     });
    //     newData.push(row);
    //   });
    //   return newData;
    // }
  
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
  
    pricingClicked() {
      this.listPricingTableHeader();
      this.offerPricingTableHeader();
      this.customModel.data = [
        [new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''}),
        new TableItem({data: ''})]
      ];
    }
  
    definingClicked() {
      this.definingTableHeader();
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
  
    descriptiveClicked() {
      this.descriptiveTableHeader();
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
  