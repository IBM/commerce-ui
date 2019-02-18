import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CatalogsRoutingModule } from './catalogs-routing.module';
import { IconModule } from '@carbon/icons-angular';
import { ButtonModule,
    TabsModule, AccordionModule, CheckboxModule, RadioModule, TableModule, DropdownModule,
LinkModule, ModalModule, SearchModule, PlaceholderModule, DialogModule, UIShellModule  } from 'carbon-components-angular';
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
IconModule,
UIShellModule
],
declarations: [HeaderComponent, FooterComponent, SideBarComponent, ModelPopupComponent,
NewMasterCategoryComponent, ExtendedSitesComponent, LandingPageComponent, SearchResultComponent, UiShellComponent, UnderconstructionComponent,
StockholmComponent, MainUiShellComponent, StockHolmCASComponent, UnassignedCatEntriesComponent ],


providers: [ModalService],

entryComponents: [ModelPopupComponent]

})
export class CatalogsModule { }
