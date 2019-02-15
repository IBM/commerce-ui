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

  title: 'NewMasterCotegory';
  navToStock:boolean;
  sequence = '';
  type = '';
  displaytocust
  constructor(private router: Router, private storesele: StoreselectionService) { }



  ngOnInit() {
   
    // let abc = this.storesele.initialLoad;
    // abc = true;
    this.sideBar=this.storesele.get();
    
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
