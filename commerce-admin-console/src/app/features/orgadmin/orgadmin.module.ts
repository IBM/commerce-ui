import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgadminRoutingModule} from './orgadmin-routing.module';
import { IconModule } from '@carbon/icons-angular';
import { ButtonModule,
  TabsModule, AccordionModule, CheckboxModule, RadioModule, TableModule, DropdownModule,
LinkModule, ModalModule, SearchModule, PlaceholderModule, DialogModule, UIShellModule, FileUploaderModule, NotificationModule, PaginationModule  } from 'carbon-components-angular';
import { UsersComponent } from './components/users/users/users.component';
import { AccountInfoComponent } from './components/users/account-info/account-info.component';
import { ManageOrgComponent } from './components/users/manage-org/manage-org.component'
import { OrganisationLandingPageComponent } from './components/organisation-landing-page/organisation-landing-page.component'
@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    OrgadminRoutingModule,
    IconModule,
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
    UIShellModule,
    FileUploaderModule,
    NotificationModule,
    ButtonModule,
    PaginationModule
  ],
  declarations: [UsersComponent, AccountInfoComponent, ManageOrgComponent, OrganisationLandingPageComponent]
})
export class OrgadminModule { }
