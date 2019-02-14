import { Component, ViewChild, OnInit, Input, OnChanges, ViewEncapsulation, AfterContentInit, OnDestroy, SimpleChanges, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';
import { MasterCategoryService } from '../../services/masterCategory/master-category.service';

@Component({
  selector: 'app-stockholm',
  templateUrl: './stockholm.component.html',
  styleUrls: ['./stockholm.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class StockholmComponent implements OnInit {


  // private router = Router;
  // data = this.masterCategoryService.getData();

  constructor(private translate: TranslateService,
    private masterCategoryService: MasterCategoryService,
    private router:Router) {
      // if(this.data){
      //   // do whatever needed
      //   return this.data;
      // }
      // else{
      //   this.router.navigate(['/catalogs/masterCategory']);
      // }
   } 
//    {
//     // this.router =route;
// }

  @Input() customModel = new TableModel();
  @Input() size = 'md';
  @Input() showSelectionColumn = false;
  @Input() striped = true;

  @ViewChild("customHeaderTemplate")
	protected customHeaderTemplate: TemplateRef<any>;
	@ViewChild("customTableItemTemplate")
  protected customTableItemTemplate: TemplateRef<any>;
  @ViewChild("customTableItemTemplate2")
  protected customTableItemTemplate2: TemplateRef<any>;
  @ViewChild('paginationTableItemTemplate')
  protected paginationTableItemTemplate: TemplateRef<any>;

  masterInputData = [];
  display_to_customers;
  image = '';
  descreption: any;
  sequence: any;
  type: any;
  code: any;
  name: any;

  private readonly headerIndex = {
    '0': {
      'translateId': 'CATALOGS.STOCKHOLM.sequence',
      'sortOrderAscId': 'A-approvalStatusId',
      'sortOrderDescId': 'D-approvalStatusId'
    },
    '1': {
      'translateId': 'CATALOGS.STOCKHOLM.type',
      'sortOrderAscId': '',
      'sortOrderDescId': ''
    },
    '2': {
      'translateId': 'CATALOGS.STOCKHOLM.store',
      'sortOrderAscId': 'A-flowTypeId',
      'sortOrderDescId': 'D-flowTypeId'
    },
    '3': {
      'translateId': 'CATALOGS.STOCKHOLM.code',
      'sortOrderAscId': 'A-stateId',
      'sortOrderDescId': 'D-stateId'
    },
    '4': {
      'translateId': 'CATALOGS.STOCKHOLM.name',
      'sortOrderAscId': 'A-submitTime',
      'sortOrderDescId': 'D-submitTime'
    },
    '5': {
      'translateId': 'CATALOGS.STOCKHOLM.display_to_customers',
      'sortOrderAscId': 'A-submitTime',
      'sortOrderDescId': 'D-submitTime'
    }
  }

  private translationSubscription: Subscription;
 
  ngOnInit() {
    this.populateTableHeader();
    // this.showMasterData();

    const abc = this.masterCategoryService.getData();
    console.log('SERVICEDATa', abc);
    // abc.forEach((data,index) => {
    //     console.log('VALUE', data[index].code, data[index].name, data[index].descreption);

    //     this.masterInputData.push(
    //       [new TableItem({ data: data[index].code}),
    //       ({ data: data[index].type}),
    //       ({ data: data[index].store}),
    //       ({ data: data[index].code}),
    //       ({ data: data[index].name}),
    //       ({ data: data[index].display_to_customers})])
    //       console.log('VALUEEEEEEEE', data[index].code, data[index].name, data[index].sequence);
    // });
    
    
    for (let i = 0; i < abc.length; i++) {
      // debugger;
      this.sequence = abc[i][0].sequence; //2Dimensional Array
      this.code = abc[i][0].code;
      this.name = abc[i][0].name;
      this.descreption = abc[i][0].descreption;
    }

    this.customModel.data = this.masterInputData;
    // console.log('MASTERDATA', this.customModel.data);
    this.customModel.data = [
      [new TableItem({data: "4.0", template: this.customTableItemTemplate}),new TableItem({data: "asas"}), new TableItem({data: "AuroraESite"}), new TableItem({data: "asdf", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({template: this.customTableItemTemplate2})],
      [new TableItem({data: "5.0", template: this.customTableItemTemplate}),new TableItem({data: "abc"}), new TableItem({data: "ExtendedSitesCatalogAssetStore"}), new TableItem({data: "queue", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({template: this.customTableItemTemplate2})],
      [new TableItem({data: "4.0", template: this.customTableItemTemplate}),new TableItem({data: "def"}), new TableItem({data: "AuroraESite"}), new TableItem({data: "hello", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({template: this.customTableItemTemplate2})],
      [new TableItem({data: this.sequence, template: this.customTableItemTemplate}),new TableItem({data: "Type1"}), new TableItem({data: "ExtendedSitesCatalogAssetStore"}), new TableItem({data: this.code, template: this.customTableItemTemplate}), new TableItem({data: this.name, template: this.customTableItemTemplate}), new TableItem({template: this.customTableItemTemplate2})]
      
    ];
  }

  populateTableHeader() {
    this.translationSubscription = this.translate.get([this.headerIndex['0'].translateId,
    this.headerIndex['1'].translateId,
    this.headerIndex['2'].translateId,
    this.headerIndex['3'].translateId,
    this.headerIndex['4'].translateId,
    this.headerIndex['5'].translateId
    ]).subscribe((result: object) => {
      this.customModel.header = [
        new TableHeaderItem({ data: result[this.headerIndex['0'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['1'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['2'].translateId], template: this.customHeaderTemplate }),
        new TableHeaderItem({ data: result[this.headerIndex['3'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['4'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['5'].translateId] })
      ];
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sortable) {
      for (let column of this.customModel.header) {
        column.sortable = changes.sortable.currentValue;
      }
    }
  }
  // simpleSort(index: number) {
  //   sort(simpleModel, index);
  // }
  customSort(index: number) {
    this.sort(this.customModel, index);
  }

  sort(customModel, index: number) {
    if (customModel.header[index].sorted) {
      // if already sorted flip sorting direction
      customModel.header[index].ascending = customModel.header[index].descending;
    }
    customModel.sort(index);
  }

  listItems = [{
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

//   showMasterData() {
//     this.masterInputData = [
//       {
//         'sequence': this.sequence,
//         'code': this.code,
//         'name': this.name
//       }
//     ];
//     this.masterCategoryService.categoryListTableData.push(this.masterInputData);
//     console.log("showMasterData", this.masterCategoryService.categoryListTableData);
// }

  onSelect() {
    this.router.navigate(['/catalogs/masterCategory']);
    console.log("Click here");
 }

  selected() {}

  onClose() {}


}
