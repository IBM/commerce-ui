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
  // sideBar3:boolean=false;
 
  constructor(private router: Router, private storesele: StoreselectionService) { }

  ngOnInit() {
    // abc = true;
    this.sideBar=this.storesele.get();
    this.sideBar1=this.storesele.getStockCAS();
    this.sideBar2=this.storesele.getStock();
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
