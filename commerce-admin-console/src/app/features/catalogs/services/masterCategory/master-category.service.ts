import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterCategoryService {
  categoryListTableData = [];
  constructor() { }

  private data;

  setData(data){
    this.data = data;
    console.log("SETDATA IN SERVICE", this.data);
  }

  getData(){
    let temp = this.categoryListTableData;
    // this.clearData();
    console.log("GETDATA METHOD IN SERVICE", temp);
    return temp;
  }

  clearData(){
    this.data = undefined;
  }
}
