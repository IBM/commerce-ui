import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgadminRoutingModule} from './orgadmin-routing.module';
import { UsersComponent } from './components/users/users/users.component'
@NgModule({
  imports: [
    CommonModule,
    OrgadminRoutingModule
  ],
  declarations: [UsersComponent]
})
export class OrgadminModule { }
