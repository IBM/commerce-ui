import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NewMasterCategoryComponent } from './components/new-master-category/new-master-category.component';
import { ExtendedSitesComponent } from './components/extended-sites/extended-sites.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

const routes: Routes = [
{
path: '', component: LandingPageComponent
},
{
path: 'masterCategory', component: NewMasterCategoryComponent
},
{
path: 'searchResult', component: SearchResultComponent
},
{
path: 'masterCategory/:id', component: NewMasterCategoryComponent
},
{
path: 'extendedSite', component: ExtendedSitesComponent
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CatalogsRoutingModule { }
