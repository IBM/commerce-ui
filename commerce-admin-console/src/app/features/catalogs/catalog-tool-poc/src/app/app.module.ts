import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule, TabsModule, AccordionModule, CheckboxModule, RadioModule, TableModule, DropdownModule, LinkModule, ModalModule } from 'carbon-components-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NewMasterCategoryComponent } from './components/newMasterCategory/newMasterCategory.component';
import { ModelmessageComponent } from './components/modelmessage/modelmessage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'masterCategory', component: NewMasterCategoryComponent},
  { path: 'modal', component: ModelmessageComponent},
  { path: 'categoryList', component: CategoriesListComponent}
];


@NgModule({
  declarations: [
    AppComponent, NewMasterCategoryComponent, ModelmessageComponent, NavbarComponent, CategoriesListComponent, LandingPageComponent
  ],
  imports: [
    BrowserModule, FormsModule, ButtonModule, TabsModule, AccordionModule, CheckboxModule, RadioModule, TableModule, DropdownModule,
    LinkModule, ModalModule, BrowserAnimationsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
