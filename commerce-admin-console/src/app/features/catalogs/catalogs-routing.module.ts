import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListCatalogsComponent } from "./list-catalogs/list-catalogs.component";

const routes: Routes = [{
	path: "",
	component: ListCatalogsComponent
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CatalogsRoutingModule { }
