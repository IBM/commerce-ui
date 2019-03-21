import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgadminRoutingModule} from './orgadmin-routing.module';
import { IconModule } from '@carbon/icons-angular';
import { ButtonModule,
  TabsModule, AccordionModule, CheckboxModule, RadioModule, TableModule, DropdownModule,
LinkModule, ModalModule, SearchModule, PlaceholderModule, DialogModule, UIShellModule, FileUploaderModule, NotificationModule  } from 'carbon-components-angular';
import { UsersComponent } from './components/users/users/users.component';
import { AccountInfoComponent } from './components/users/account-info/account-info.component';
import { ManageOrgComponent } from './components/users/manage-org/manage-org.component'
@NgModule({
  imports: [
    CommonModule,
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
    ButtonModule
  ],
  declarations: [UsersComponent, AccountInfoComponent, ManageOrgComponent]
})
export class OrgadminModule { }
