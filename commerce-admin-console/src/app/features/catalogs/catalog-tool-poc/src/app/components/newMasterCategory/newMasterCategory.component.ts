import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import {TableModel, TableHeaderItem, TableItem } from "carbon-components-angular";


@Component({
selector : 'app-master',
templateUrl : './newMasterCategory.component.html',
styleUrls : ['./newMasterCategory.component.scss'],
})

export class NewMasterCategoryComponent implements OnInit{
title: 'NewMasterCotegory';
code = '';
name = '';
descreption = '';
thumbnail = '';
image = '';
keyword = '';
pageTitle = '';
metaDesc = '';
imgAltText = '';
masterInputData = [];
categoryListTableData = [];

constructor(private router: Router){};

saveMasterData() {
    this.masterInputData = [
        {'code': this.code, 'name': this.name, 'descreption': this.descreption, 
        'thumbnail': this.thumbnail, 'image': this.image, 'keyword': this.keyword, 
        'pageTitle': this.pageTitle, 'metaDesc': this.metaDesc, 'imgAltText': this.imgAltText}
    ];
    this.categoryListTableData.push(this.masterInputData);
    console.log(this.categoryListTableData);
}

closeMasterCategory() {
this.router.navigate(['/']);
}

@Input() model = new TableModel();
@Input() size = "md";
@Input() showSelectionColumn = true;
@Input() striped = true;
ngOnInit() {
    this.model.header = [
        new TableHeaderItem({data: "Sequence"}), new TableHeaderItem({data: "Type"}), 
        new TableHeaderItem({data: "Store"}), new TableHeaderItem({data: "Path"}),
        new TableHeaderItem({data: "Code"}), new TableHeaderItem({data: "Usage"}),
        new TableHeaderItem({data: "Administative name (United State English)"}), 
        new TableHeaderItem({data: "Display name (United State English)"}),
        new TableHeaderItem({data: "Short description (United State English)"}),
    ];
    // this.model.data = [
    //     [new TableItem({ data: '0 of 0 selected' }), new TableItem({ data: ''}), new TableItem({ data: ''}), 
    //     new TableItem({ data: '' }), new TableItem({ data: ''}), new TableItem({ data: ''}),
    //     new TableItem({ data: '' }), new TableItem({ data: ''}), new TableItem({ data: ''})]   
    // ];


    this.model.data = [
        [new TableItem({ data: "Name 1" }), new TableItem({ data: { name: "Lessy", Input: '<input type="text">'}, template: this.customTableItemTemplate })],
        [new TableItem({ data: "Name 3" }), new TableItem({ data: "swer" })],
        [new TableItem({ data: "Name 2" }), new TableItem({ data: { name: "Alice", surname: "Bob" }, template: this.customTableItemTemplate })],
        [new TableItem({ data: "Name 4" }), new TableItem({ data: "twer" })]
    ];
}



	@ViewChild("customHeaderTemplate")
	protected customHeaderTemplate: TemplateRef<any>;
	@ViewChild("customTableItemTemplate")
	protected customTableItemTemplate: TemplateRef<any>;


}