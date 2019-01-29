import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
listItems = [
{
content: "AuroraESite",
selected: false
},
{
content: "ExtendedSitesCatalogAssetStore",
selected: false,
},
{
content: "MyCustomStore",
selected: false
},
{
content: "MyCustomStoreCAS",
selected: false
}
];
}
