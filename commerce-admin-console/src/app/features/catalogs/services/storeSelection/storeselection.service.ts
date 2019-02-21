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
  constructor() { }
}
