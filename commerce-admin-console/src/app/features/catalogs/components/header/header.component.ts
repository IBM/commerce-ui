import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreselectionService } from '../../services/storeSelection/storeselection.service';
//import { SideBarComponent } from './side-bar/side-bar.component';



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
  //@ViewChild(SideBarComponent) ele: SideBarComponent;

  //user : {id: number};


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
      content: "StockholmCAS",
      selected: false
    },
    {
      content: "Stockholm",
      selected: false
    }
  ];
  constructor(private router: Router, private storesele: StoreselectionService) { }

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
  selected(ev) {
    // if (ev.item != undefined && ev.item.content != undefined) {
    //   //debugger;
    if (ev.item.content === "AuroraESite" || ev.item.content === "ExtendedSitesCatalogAssetStore") {
      this.storesele.set();
      this.router.navigate(['/catalogs/extendedSite']);
      this.storesele.navToUnassigned = true;
      this.storesele.navToStockCAS = false;
      this.storesele.navToStock = false;
    }
    if (ev.item.content === "StockholmCAS") {

      //console.log(ev);
      this.storesele.setStockCAS();
      this.router.navigate(['/catalogs/stockholmcas']);
      this.storesele.navToMaster = false;
      this.storesele.navToStock = false;

    }
    //console.log(this.storesele.setExt);

    if (ev.item.content === "Stockholm") {
      this.storesele.setStock();
      this.router.navigate(['/catalogs/stockholm']);
      this.storesele.navToStockCAS = false;
      this.storesele.navToMaster = false;

    }
  }
}


