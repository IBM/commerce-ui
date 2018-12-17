import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CatalogsRoutingModule } from "./catalogs-routing.module";
import { ListCatalogsComponent } from "./list-catalogs/list-catalogs.component";
import { ButtonModule } from "carbon-components-angular";

@NgModule({
	imports: [
		CommonModule,
		CatalogsRoutingModule,
		ButtonModule
	],
	declarations: [ListCatalogsComponent]
})
export class CatalogsModule { }
