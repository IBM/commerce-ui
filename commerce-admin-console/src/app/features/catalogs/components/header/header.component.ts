import { Component, ViewChild, OnInit, Input, OnChanges,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  constructor() { }

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
