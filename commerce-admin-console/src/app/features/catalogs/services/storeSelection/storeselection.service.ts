import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreselectionService {

  initialLoad:boolean = true;
  navToMaster:boolean = false;

  set(){
    debugger;
    this.navToMaster = true;
  }
  get(){
   return this.navToMaster;
  }

  constructor() { }
}
