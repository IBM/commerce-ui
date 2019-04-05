import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CatalogsRoutingModule } from './catalogs-routing.module';
import { Maximize32Module } from '@carbon/icons-angular/lib/maximize/32';
import { HelpFilled20Module } from '@carbon/icons-angular/lib/help--filled/20';
import { Table32Module } from '@carbon/icons-angular/lib/table/32';
import { WarningFilled16Module } from '@carbon/icons-angular/lib/warning--filled/16';
import { Add16Module } from '@carbon/icons-angular/lib/add/16';
import { CloseOutline16Module } from '@carbon/icons-angular/lib/close--outline/16';
import { Search32Module } from '@carbon/icons-angular/lib/search/32';
import { ArrowLeft32Module } from '@carbon/icons-angular/lib/arrow--left/32';
import { ArrowRight32Module } from '@carbon/icons-angular/lib/arrow--right/32';
import { AddAlt32Module } from '@carbon/icons-angular/lib/add--alt/32';
import { StopOutline32Module } from '@carbon/icons-angular/lib/stop--outline/32';
import { Wikis32Module } from '@carbon/icons-angular/lib/wikis/32';
import { Save32Module } from '@carbon/icons-angular/lib/save/32';
import { CopyFile32Module } from '@carbon/icons-angular/lib/copy--file/32';
import { Close32Module } from '@carbon/icons-angular/lib/close/32';
import { Screen32Module } from '@carbon/icons-angular/lib/screen/32';
import { Menu32Module } from '@carbon/icons-angular/lib/menu/32';
import { CheckmarkOutline16Module } from '@carbon/icons-angular/lib/checkmark--outline/16';
import { Catalog32Module } from '@carbon/icons-angular/lib/catalog/32';
import { ButtonModule,
    TabsModule, AccordionModule, CheckboxModule, RadioModule, TableModule, DropdownModule,
LinkModule, ModalModule, SearchModule, PlaceholderModule, DialogModule, UIShellModule, FileUploaderModule, NotificationModule  } from 'carbon-components-angular';
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
import { UiShellComponent } from './components/ui-shell/ui-shell.component'
import { MainUiShellComponent } from './components/main-ui-shell/main-ui-shell.component';
import { StockHolmCASComponent } from './components/stock-holm-cas/stock-holm-cas.component';
import { StockholmComponent } from './components/stockholm/stockholm.component';
import { UnassignedCatEntriesComponent } from './components/unassigned-cat-entries/unassigned-cat-entries.component';
import { CatalogUploadComponent } from './components/catalog-upload/catalog-upload.component';
import { NewCatalogUploadComponent } from './components/new-catalog-upload/new-catalog-upload.component';
import { CatalogLevelSkuComponent } from './components/catalog-level-sku/catalog-level-sku.component'

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
Maximize32Module,
HelpFilled20Module,
Table32Module,
WarningFilled16Module,
Add16Module,
CloseOutline16Module,
Search32Module,
ArrowLeft32Module,
ArrowRight32Module,
AddAlt32Module,
StopOutline32Module,
Wikis32Module,
Save32Module,
CopyFile32Module,
Close32Module,
Screen32Module,
Menu32Module,
CheckmarkOutline16Module,
Catalog32Module,
UIShellModule,
FileUploaderModule,
NotificationModule
],
declarations: [HeaderComponent, FooterComponent, SideBarComponent, ModelPopupComponent,
NewMasterCategoryComponent, ExtendedSitesComponent, LandingPageComponent, SearchResultComponent, UiShellComponent, UnderconstructionComponent,
StockholmComponent, MainUiShellComponent, StockHolmCASComponent, UnassignedCatEntriesComponent, CatalogUploadComponent, NewCatalogUploadComponent, 
CatalogLevelSkuComponent],


providers: [ModalService],

entryComponents: [ModelPopupComponent]

})
export class CatalogsModule { }
