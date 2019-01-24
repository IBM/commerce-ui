import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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


  ngOnInit() {
  }
  // formData.show = {};

  onClickMe() {
    this.show = true;
    //this.show = !this.show;

    //this.formData.show = !this.formData.show;
  }

}
