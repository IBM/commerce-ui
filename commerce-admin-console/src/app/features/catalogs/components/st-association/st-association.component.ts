import { Component, OnInit, ViewEncapsulation, TemplateRef, Input, ViewChild, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';

@Component({
  selector: 'app-st-association',
  templateUrl: './st-association.component.html',
  styleUrls: ['./st-association.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StAssociationComponent implements OnInit {

  constructor(private translate: TranslateService,
    private router:Router) {
   }

  @Input() customModel_1 = new TableModel();
  @Input() customModel_2 = new TableModel();
  @Input() customModel_3 = new TableModel();
  @Input() customModel_4 = new TableModel();
  @Input() customModel_5 = new TableModel();
  @Input() size = 'md';
  @Input() showSelectionColumn = false;
  @Input() striped = true;

  @ViewChild("customHeaderTemplate")
  protected customHeaderTemplate_1: TemplateRef<any>;
  protected customHeaderTemplate_2: TemplateRef<any>;
  protected customHeaderTemplate_3: TemplateRef<any>;
  protected customHeaderTemplate_4: TemplateRef<any>;
  protected customHeaderTemplate_5: TemplateRef<any>;
  @ViewChild("customTableItemTemplate")
  protected customTableItemTemplate_1: TemplateRef<any>;
  protected customTableItemTemplate_2: TemplateRef<any>;
  protected customTableItemTemplate_3: TemplateRef<any>;
  protected customTableItemTemplate_4: TemplateRef<any>;
  protected customTableItemTemplate_5: TemplateRef<any>;
  
  private readonly headerIndex = {
    '0': {
      'translateId': 'CATALOGS.SEARCH_TERM_ASSOCIATIONS.STORE'
    },
    '1': {
      'translateId': 'CATALOGS.SEARCH_TERM_ASSOCIATIONS.TYPE'
    },
    '2': {
      'translateId': 'CATALOGS.SEARCH_TERM_ASSOCIATIONS.SYNONYM_LIST'
    },
    '3': {
      'translateId': 'CATALOGS.SEARCH_TERM_ASSOCIATIONS.SEARCH_TERM'
    },
    '4': {
      'translateId': 'CATALOGS.SEARCH_TERM_ASSOCIATIONS.REPLACEMENT_TYPE'
    },
    '5': {
      'translateId': 'CATALOGS.SEARCH_TERM_ASSOCIATIONS.REPLACEMENT_TERMS'
    },
    '6': {
      'translateId': 'CATALOGS.SEARCH_TERM_ASSOCIATIONS.LANDING_PAGE'
    },
    '7': {
      'translateId': 'CATALOGS.SEARCH_TERM_ASSOCIATIONS.DISPLAY_TO_CUSTOMERS'
    },
    '8': {
      'translateId': 'CATALOGS.SEARCH_TERM_ASSOCIATIONS.KEYWORD'
    },
    '9': {
      'translateId': 'CATALOGS.SEARCH_TERM_ASSOCIATIONS.SEARCHING_SESSIONS'
    },
    '10': {
      'translateId': 'CATALOGS.SEARCH_TERM_ASSOCIATIONS.RESULTS_FOR_KEYWORD'
    },
    '11': {
      'translateId': 'CATALOGS.SEARCH_TERM_ASSOCIATIONS.SYNONYMS_OR_REPLACEMENTS'
    },
    '12': {
      'translateId': 'CATALOGS.SEARCH_TERM_ASSOCIATIONS.SUGGESTED_KEYWORD'
    },
    '13': {
      'translateId': 'CATALOGS.SEARCH_TERM_ASSOCIATIONS.RESULTS_FOR_SUGGESTED_KEYWORD'
    }
  }

  private translationSubscription: Subscription;

  ngOnInit() {
    this.populateTableHeader_1();
    this.populateTableHeader_2();
    this.populateTableHeader_3();
    this.populateTableHeader_4();
    this.populateTableHeader_5();

    this.customModel_1.data = [
      [new TableItem({data: ""}),new TableItem({data: ""}), new TableItem({data: ""})]
    ];
    this.customModel_2.data = [
      [new TableItem({data: ""}),new TableItem({data: ""}), new TableItem({data: ""}) ,new TableItem({data: ""}), new TableItem({data: ""})]
      
    ];
    this.customModel_3.data = [
      [new TableItem({data: "AuroraESite"}),new TableItem({data: ""}), new TableItem({data: "map", template: this.customTableItemTemplate_3}) ,new TableItem({data: "GenericStaticContentPageLayoutView?", template: this.customTableItemTemplate_3})],
      [new TableItem({data: "ExtendedSitesCatalogAssetStore"}),new TableItem({data: ""}), new TableItem({data: "help", template: this.customTableItemTemplate_3}) ,new TableItem({data: "GenericStaticContentPageLayoutView", template: this.customTableItemTemplate_3})],
      [new TableItem({data: "AuroraESite"}),new TableItem({data: ""}), new TableItem({data: "privacy", template: this.customTableItemTemplate_3}) ,new TableItem({data: "Store View", template: this.customTableItemTemplate_3})],
      [new TableItem({data: "ExtendedSitesCatalogAssetStore"}),new TableItem({data: ""}), new TableItem({data: "contact", template: this.customTableItemTemplate_3}) ,new TableItem({data: "GenericStaticContentPageLayoutView", template: this.customTableItemTemplate_3})]
      
    ];
    this.customModel_4.data = [
      [new TableItem({data: ""}),new TableItem({data: ""}), new TableItem({data: ""}), new TableItem({data: ""})]
    ];
    this.customModel_5.data = [
      [new TableItem({data: ""}),new TableItem({data: ""}), new TableItem({data: ""}), new TableItem({data: ""})]
    ];
  }

  populateTableHeader_1() {
    this.translationSubscription = this.translate.get([this.headerIndex['0'].translateId,
    this.headerIndex['1'].translateId,
    this.headerIndex['2'].translateId
    ]).subscribe((result: object) => {
      this.customModel_1.header = [
        new TableHeaderItem({ data: result[this.headerIndex['0'].translateId], template: this.customHeaderTemplate_1 }),
        new TableHeaderItem({ data: result[this.headerIndex['1'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['2'].translateId] })
      ];
    });
  }
  populateTableHeader_2() {
    this.translationSubscription = this.translate.get([this.headerIndex['0'].translateId,
    this.headerIndex['1'].translateId,
    this.headerIndex['3'].translateId,
    this.headerIndex['4'].translateId,
    this.headerIndex['5'].translateId
    ]).subscribe((result: object) => {
      this.customModel_2.header = [
        new TableHeaderItem({ data: result[this.headerIndex['0'].translateId], template: this.customHeaderTemplate_2 }),
        new TableHeaderItem({ data: result[this.headerIndex['1'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['3'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['4'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['5'].translateId] })
      ];
    });
  }
  populateTableHeader_3() {
    this.translationSubscription = this.translate.get([this.headerIndex['0'].translateId,
    this.headerIndex['1'].translateId,
    this.headerIndex['3'].translateId,
    this.headerIndex['6'].translateId
    ]).subscribe((result: object) => {
      this.customModel_3.header = [
        new TableHeaderItem({ data: result[this.headerIndex['0'].translateId], template: this.customHeaderTemplate_3 }),
        new TableHeaderItem({ data: result[this.headerIndex['1'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['3'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['6'].translateId] })
      ];
    });
  }
  populateTableHeader_4() {
    this.translationSubscription = this.translate.get([this.headerIndex['8'].translateId,
    this.headerIndex['9'].translateId,
    this.headerIndex['10'].translateId,
    this.headerIndex['11'].translateId
    ]).subscribe((result: object) => {
      this.customModel_4.header = [
        new TableHeaderItem({ data: result[this.headerIndex['8'].translateId], template: this.customHeaderTemplate_4 }),
        new TableHeaderItem({ data: result[this.headerIndex['9'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['10'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['11'].translateId] })
      ];
    });
  }
  populateTableHeader_5() {
    this.translationSubscription = this.translate.get([this.headerIndex['8'].translateId,
    this.headerIndex['9'].translateId,
    this.headerIndex['12'].translateId,
    this.headerIndex['13'].translateId
    ]).subscribe((result: object) => {
      this.customModel_5.header = [
        new TableHeaderItem({ data: result[this.headerIndex['8'].translateId], template: this.customHeaderTemplate_5 }),
        new TableHeaderItem({ data: result[this.headerIndex['9'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['12'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['13'].translateId] })
      ];
    });
  }
  

  listItems = [
    {
    content: "Show All",
    selected: false
    },
    {
        content: "AuroraESite",
        selected: false,
    },
    {
        content: "ExtendedSitesCatalogAssetStore",
        selected: false
    }
  ];
  reporting_listItems = [
    {
    content: "Last Week",
    selected: false
    },
    {
        content: "Last Two Weeks",
        selected: false,
    },
    {
        content: "Last month",
        selected: false
    },
    {
        content: "Choose reporting period",
        selected: false
    }
  ];
  topKeywod_listItems = [
    {
    content: "All",
    selected: false
    },
    {
        content: "Top 5",
        selected: false,
    },
    {
        content: "Top 10",
        selected: false
    },
    {
        content: "Top 20",
        selected: false
    }
  ];
  language_listItems = [
    {
    content: "United States English",
    selected: false
    }
  ];
  suggested_listItems = [
    {
    content: "Show all keywords",
    selected: false
    }
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sortable) {
      for (let column of this.customModel_1.header) {
        column.sortable = changes.sortable.currentValue;
      }
    }
  }
  // simpleSort(index: number) {
  //   sort(simpleModel, index);
  // }
  customSort(index: number) {
    this.sort(this.customModel_1, index);
  }

  sort(customModel, index: number) {
    if (customModel.header[index].sorted) {
      // if already sorted flip sorting direction
      customModel.header[index].ascending = customModel.header[index].descending;
    }
    customModel.sort(index);
  }

  selected() {}

  onClose() {}

}
