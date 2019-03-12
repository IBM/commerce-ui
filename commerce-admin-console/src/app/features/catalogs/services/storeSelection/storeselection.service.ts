import { Injectable } from '@angular/core';
import { OnlineStoresService } from '../../../../rest/services/online-stores.service';
import { TranslateService } from '@ngx-translate/core';
import { IframeService } from '../../../../services/iframe.service';

@Injectable({
  providedIn: 'root'
})
export class StoreselectionService {

  navToStockCAS:boolean = false;
  navToMaster:boolean = false;
  navToStock:boolean= false;
  navToUnassigned:boolean = false;
  navToExtendedSite:boolean = false;
  navigateToCatalogUpload:boolean=false;
  navigateToSearch:boolean=false;
  navigateToCatalogSKU:boolean=false;

  resultData: any;


  constructor(private onlineStoriesService: OnlineStoresService, private translateService: TranslateService,
    private iframeService: IframeService) { }

  set(){
    //debugger;
    this.navToMaster = true;
  }
  get(){
   return this.navToMaster;
  }
  setStockCAS(){
    this.navToStockCAS = true;
  }
  getStockCAS(){
   return this.navToStockCAS;
  }
  setStock(){
    this.navToStock = true;
  }
  getStock(){
   return this.navToStock;
  }
  setUnassignedCatEntries(){
    this.navToUnassigned = true;
  }
  getUnassignedCatEntries(){
    return this.navToUnassigned;
  }
  setExtendedSite(){
    this.navToExtendedSite = true;
  }
  getExtendedSite(){
    return this.navToExtendedSite;
  }
  setSearch(){
    this.navigateToSearch=true;
  }
  getSearch(){
    return this.navigateToSearch;
  }
  setCatalogUpload(){
    this.navigateToCatalogUpload=true;
  }
  getCatalogUpload(){
    return this.navigateToCatalogUpload;
  }
  setCatalogSku(){
    this.navigateToCatalogSKU=true;
  }
  getCatalogSku(){
   return this.navigateToCatalogSKU;
  }

  storeListApi(): Promise<Object> {
    return new Promise((resolve, reject) => {
      this.onlineStoriesService.getOnlineStores({
        usage: 'IBM_ViewCatalogTool'
      }).subscribe(response => {
        resolve(response);
        this.resultData = response;
      },  error => {
        this.errorHandler(error);
        reject();
      });
    });
  }

  private errorHandler(error) {
    this.translateService.get('CATALOGS.HEADR.errorMessage', {code: error.status, msg: error.message})
    .subscribe((message: string) => {
        this.iframeService.postStatusMsg(message, 'error');
    });
  }

}
