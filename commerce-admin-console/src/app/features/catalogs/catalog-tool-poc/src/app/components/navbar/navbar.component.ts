import { Component, OnInit, Input } from '@angular/core';
import { strictEqual } from 'assert';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

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

  public show: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  // formData.show = {};

  onClickMe() {
    this.show = true;
    //this.show = !this.show;

    //this.formData.show = !this.formData.show;
  }
}


