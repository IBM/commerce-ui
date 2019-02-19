import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreselectionService {

  navToStockCAS:boolean = false;
  navToMaster:boolean = false;
  navToStock:boolean= false;

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
  constructor() { }
}
