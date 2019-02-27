import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ui-shell',
  templateUrl: './ui-shell.component.html',
  styleUrls: ['./ui-shell.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UiShellComponent implements OnInit {

  constructor(private _AR: ActivatedRoute, private router: Router) { }

  @Input() size = 'sm';
  @Input() theme = 'dark';
  @Input() disabled = false;
  @Input() placeholder='Search';
  
  listItems = [
    {
      content: "All Catalog Entries Including SKUs",
      selected: false
    },
    {
      content: "All Catalog Entries Excluding SKUs",
      selected: false,
    },
    {
      content: "Categories",
      selected: false
    },
    {
      content: "Sales Categories",
      selected: false
    },
    {
      content: "Products",
      selected: false
    },
    {
      content: "SKUs",
      selected: false,
    },
    {
      content: "Bundles",
      selected: false
    },
    {
      content: "Kits",
      selected: false
    },
    {
      content: "Attribute Dictionary Attributes",
      selected: false
    },
    {
      content: "Catalog",
      selected: false,
    },
    {
      content: "Advanced Search",
      selected: false
    }
  ];
  navigateToNewCatalogUpload(): void{
  this.router.navigate(["/catalogs/newCatalogUpload"]);
  }
  underDev() {

    this.router.navigate(["/catalogs/UnderConstruction"]);
  }
  ngOnInit() {
  }
  menuClicked: () => {};
}
