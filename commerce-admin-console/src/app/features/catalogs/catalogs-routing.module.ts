import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NewMasterCategoryComponent } from './components/new-master-category/new-master-category.component';
import { ExtendedSitesComponent } from './components/extended-sites/extended-sites.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { UnderconstructionComponent } from './components/underconstruction/underconstruction.component';
import { StockHolmCASComponent } from './components/stock-holm-cas/stock-holm-cas.component';
import { StockholmComponent } from './components/stockholm/stockholm.component';


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
path: 'UnderConstruction', component: UnderconstructionComponent
},
{
path: 'extendedSite', component: ExtendedSitesComponent
},
{
path: 'stockholmcas', component: StockHolmCASComponent
},
{
path: 'stockholm', component: StockholmComponent
},
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CatalogsRoutingModule { }
