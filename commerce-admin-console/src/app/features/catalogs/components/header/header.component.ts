import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  show = false;
  
  @Input() linkShow = true;
  //@ViewChild(HeaderComponent) ele: HeaderComponent;
  user : {id: number};

  constructor(private _AR: ActivatedRoute) { }

  @Input() size = 'sm';
  @Input() theme = 'dark';
  @Input() disabled = false;
  @Input() placeholder='Search';
  
  listItems = [
    {
      content: "AuroraESite",
      selected: false
    },
    {
      content: "ExtendedSitesCatalogAssetStore",
      selected: false,
    },
    {
      content: "MyCustomStore",
      selected: false
    },
    {
      content: "MyCustomStoreCAS",
      selected: false
    }
  ];


  ngOnInit() {
   this.user = {
     id: this._AR.snapshot.params['id']
   };
   if (this.user.id) {
    this.linkShow = false;
    }
  }
// ngAfterViewInit(){

// if (this.user.id) {
// this.linkShow = false;
//  }
// }
  onClickMe() {
    this.show = true;
  }

}
