import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  //show = false;
  @Input() linkShow = true;
  @Input() linkShow1: boolean = true;
  //@ViewChild(HeaderComponent) ele: HeaderComponent;
  //user : {id: number};
  aurora= {};

  @Input() size = 'sm';
  @Input() theme = 'dark';
  @Input() disabled = false;
  @Input() placeholder = 'Search';

  listItems = [
    {
      id:1,
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
  selected(){
    if(this.listItems.)
  }
  
  constructor(private _AR: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.router.url == '/catalogs/masterCategory') {
      this.linkShow1 = false;
    }
  }
  underDev() {

    this.router.navigate(["/catalogs/UnderConstruction"]);
  }
  masterFromMenu() {
    this.router.navigate(["/catalogs/masterCategory"]);
  }
}
