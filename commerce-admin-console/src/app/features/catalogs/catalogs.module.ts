import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogsRoutingModule } from './catalogs-routing.module';
import { ButtonModule, 
    TabsModule, AccordionModule, CheckboxModule, RadioModule, TableModule, DropdownModule,
LinkModule, ModalModule, SearchModule, PlaceholderModule, DialogModule  } from 'carbon-components-angular';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ModelPopupComponent } from './components/model-popup/model-popup.component';
import { NewMasterCategoryComponent } from './components/new-master-category/new-master-category.component';
import { ExtendedSitesComponent } from './components/extended-sites/extended-sites.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ModalService } from 'carbon-components-angular'

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
ModalModule,
SearchModule,
PlaceholderModule,
DialogModule
],
declarations: [HeaderComponent, FooterComponent, SideBarComponent, ModelPopupComponent, 
NewMasterCategoryComponent, ExtendedSitesComponent, LandingPageComponent, SearchResultComponent
],


providers: [ModalService],

entryComponents: [ModelPopupComponent]
 
})
export class CatalogsModule { }
