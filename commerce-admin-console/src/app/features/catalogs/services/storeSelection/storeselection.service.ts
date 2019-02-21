import { Injectable } from '@angular/core';

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
  constructor() { }
}
