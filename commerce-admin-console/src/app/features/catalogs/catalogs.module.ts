import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogsRoutingModule } from './catalogs-routing.module';
import { ButtonModule, TabsModule, AccordionModule, CheckboxModule, RadioModule, TableModule, DropdownModule,
LinkModule, ModalModule } from 'carbon-components-angular';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ModelPopupComponent } from './components/model-popup/model-popup.component';
import { NewMasterCategoryComponent } from './components/new-master-category/new-master-category.component';
import { ExtendedSitesComponent } from './components/extended-sites/extended-sites.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
imports: [
CommonModule,
FormsModule,
CatalogsRoutingModule,
ButtonModule,
TabsModule,
AccordionModule,
CheckboxModule,
RadioModule,
TableModule,
DropdownModule,
LinkModule,
ModalModule
],
declarations: [HeaderComponent, FooterComponent, SideBarComponent, ModelPopupComponent, 
NewMasterCategoryComponent, ExtendedSitesComponent, LandingPageComponent]
})
export class CatalogsModule { }
