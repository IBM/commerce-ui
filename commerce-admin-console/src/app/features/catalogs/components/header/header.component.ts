import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreselectionService } from '../../services/storeSelection/storeselection.service';
import { OnlineStoresService } from '../../../../rest/services/online-stores.service';
import { TranslateService } from '@ngx-translate/core';
import { IframeService } from '../../../../services/iframe.service';



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

  @Input() size = 'sm';
  @Input() theme = 'dark';
  @Input() disabled = false;
  @Input() placeholder = 'Search';


  constructor(private router: Router, private storesele: StoreselectionService,
    private onlineStoriesService: OnlineStoresService, private translateService: TranslateService,
    private iframeService: IframeService) { }
 storeListResult: any;
 stores: any;
 listItems: any;


  ngOnInit() {
    if (this.router.url === '/catalogs/masterCategory') {
      this.linkShow1 = false;
    }
    this.stoteListServiceCall();
  }

  stoteListServiceCall() {
      this.storesele.storeListApi().then(results => {
      this.storeListResult = Object.assign([], results);
      this.iterateStoreList();
   }).catch(() => {
    this.translateService
        .get('CATALOGS.HEADR.store_list_failed')
        .subscribe((msg: string) => {
          this.iframeService.postStatusMsg(msg, 'error');
        });
  });
  }

  iterateStoreList() {
    this.listItems = this.storeListResult.items.map(item => {
      return { content: item.identifier
      };
    });
  }

  underDev() {

    this.router.navigate(["/catalogs/UnderConstruction"]);
  }
  masterFromMenu() {
    this.router.navigate(["/catalogs/masterCategory"]);
  }
  navigateToNewCatalogUpload(): void{
    this.router.navigate(["/catalogs/newCatalogUpload"]);
    }
    navigateToCatalogLevelSKU(){
      this.router.navigate(["/catalogs/catalogSKU"]);
    }
  selected(ev) {
    if (ev.item != undefined && ev.item.content != undefined) {
    //   //debugger;
    if (ev.item.content === "AuroraESite" || ev.item.content === "ExtendedSitesCatalogAssetStore") {
      this.storesele.set();
      this.router.navigate(['/catalogs/extendedSite']);
      this.storesele.navToUnassigned = true;
      this.storesele.navToExtendedSite = true;
      this.storesele.navToStockCAS = false;
      this.storesele.navToStock = false;
      this.storesele.navigateToSearch=true;
      this.storesele.navigateToCatalogUpload=true;
      this.storesele.navigateToCatalogSKU=true;
    }

    if (ev.item.content === "StockholmCAS") {
      this.storesele.setStockCAS();
      this.router.navigate(['/catalogs/stockholmcas']);
      this.storesele.navToExtendedSite = false;
      this.storesele.navToMaster = false;
      this.storesele.navToStock = false;
      this.storesele.navigateToCatalogUpload=false;
      this.storesele.navigateToCatalogSKU=false;
    }

    if (ev.item.content === "Stockholm") {
      this.storesele.setStock();
      this.router.navigate(['/catalogs/stockholm']);
      this.storesele.navToExtendedSite = false;
      this.storesele.navToStockCAS = false;
      this.storesele.navToMaster = false;
      this.storesele.navigateToCatalogUpload=false;
      this.storesele.navigateToCatalogSKU=false;

    }
  }
  }
}


