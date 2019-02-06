import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CatalogsRoutingModule } from './catalogs-routing.module';
import { ButtonModule, 
    TabsModule, AccordionModule, CheckboxModule, RadioModule, TableModule, DropdownModule,
LinkModule, ModalModule, SearchModule, PlaceholderModule, DialogModule, IconModule  } from 'carbon-components-angular';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ModelPopupComponent } from './components/model-popup/model-popup.component';
import { NewMasterCategoryComponent } from './components/new-master-category/new-master-category.component';
import { ExtendedSitesComponent } from './components/extended-sites/extended-sites.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ModalService } from 'carbon-components-angular';
import { UnderconstructionComponent } from './components/underconstruction/underconstruction.component';


@NgModule({
imports: [
CommonModule,
FormsModule,
TranslateModule,
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
DialogModule,
IconModule
],
declarations: [HeaderComponent, FooterComponent, SideBarComponent, ModelPopupComponent, 
NewMasterCategoryComponent, ExtendedSitesComponent, LandingPageComponent, SearchResultComponent, UnderconstructionComponent
],


providers: [ModalService],

entryComponents: [ModelPopupComponent]
 
})
export class CatalogsModule { }
