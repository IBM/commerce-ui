import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StoreselectionService } from '../../services/storeSelection/storeselection.service';

@Component({
  selector: 'ac-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
 
  sideBar:boolean=false;
  sideBar1:boolean=false;
  sideBar2:boolean=false;
  sideBar3:boolean=false;
  sideBar4:boolean=false;
  sideBar5 :boolean=false;
  sideBar6:boolean=false;
  sideBar7:boolean=false;
 
  constructor(private router: Router, private storesele: StoreselectionService) { }

  ngOnInit() {
    // abc = true;
    this.sideBar=this.storesele.get();
    this.sideBar1=this.storesele.getStockCAS();
    this.sideBar2=this.storesele.getStock();
    this.sideBar3=this.storesele.getUnassignedCatEntries();
    this.sideBar4=this.storesele.getExtendedSite();
    this.sideBar5=this.storesele.getStockCAS();
    this.sideBar6=this.storesele.getSearch();
    this.sideBar7=this.storesele.getCatalogUpload();
    

  }

  navigateToExtend(): void {
    this.router.navigate(['/catalogs/extendedSite']);
  }
  navigateToSearch(): void {
    this.router.navigate(['/catalogs/searchResult']);
  }
  navigateToMaster(): void {
    this.router.navigate(['/catalogs/masterCategory']);
  }
  navigateToStockCAS(): void {
    this.router.navigate(['/catalogs/stockholmcas']);
  }
  navigateToStock(): void {
    this.router.navigate(['/catalogs/stockholm']);
  }
  navigateToUnassigned(): void {
    this.router.navigate(['/catalogs/unassignedCatEntries']);
  }

  navigateToCatalogUpload(): void {
    this.router.navigate(['/catalogs/catalogUpload']);
  }
listItems = [
  {
    content: "Master Catalog",
    selected: false
  },
  {
    content: "Master Catalog Categories",
    selected: false,
  },
  {
    content: "Sales Catalog Categories",
    selected: false
  }
];
}
