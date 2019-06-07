import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import {TableModel, TableHeaderItem, TableItem } from 'carbon-components-angular';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'ac-new-master-category',
  templateUrl: './new-master-category.component.html',
    styleUrls: ['./new-master-category.component.scss'],
})
export class NewMasterCategoryComponent implements OnInit {

@ViewChild('customHeaderTemplate')
protected customHeaderTemplate: TemplateRef<any>;
@ViewChild('customTableItemTemplate')
protected customTableItemTemplate: TemplateRef<any>;
@Input() customModel = new TableModel();
@Input() model = new TableModel();
@Input() size = 'md';
@Input() showSelectionColumn = true;
@Input() striped = true;

  title: 'NewMasterCotegory';
  code = '';
  name = '';
  description = '';
  thumbnail = '';
  image = '';
  keyword = '';
  pageTitle = '';
  metaDesc = '';
  imgAltText = '';
  showAssociate: boolean;
  showContent: boolean;
  showReferences: boolean;
  showAssociateEdit: boolean;
  showContentEdit: boolean;
  showReferencesEdit: boolean;
  masterInputData = [];

  constructor() { }

    saveMasterData() {
      this.masterInputData = [
          {'code': this.code, 'name': this.name, 'descreption': this.description,
          'thumbnail': this.thumbnail, 'image': this.image, 'keyword': this.keyword,
          'pageTitle': this.pageTitle, 'metaDesc': this.metaDesc, 'imgAltText': this.imgAltText}
      ];
      // this.masterCategoryService.categoryListTableData.push(this.masterInputData);
      // console.log(this.masterCategoryService.categoryListTableData);
  }

  // closeMasterCategory() {
  // this.router.navigate(['/']);
  // }
addRow() {
  this.customModel.data = [
    [new TableItem({data: '', template: this.customTableItemTemplate}),
    new TableItem({data: ''}),
    new TableItem({data: '', template: this.customTableItemTemplate}),
    new TableItem({data: '', template: this.customTableItemTemplate}),
    new TableItem({data: '', template: this.customTableItemTemplate}),
    new TableItem({data: '', template: this.customTableItemTemplate}),
    new TableItem({data: '', template: this.customTableItemTemplate}),
    new TableItem({data: '', template: this.customTableItemTemplate}),
    new TableItem({data: '', template: this.customTableItemTemplate})]
  ];
}
  ngOnInit() {
    this.showAssociate = true;
    this.showContent = true;
    this.showReferences = true;
    this.showAssociateEdit = false;
    this.showContentEdit = false;
    this.showReferencesEdit = false;
      this.customModel.header = [
        new TableHeaderItem({ data: 'Sequence'}),
        new TableHeaderItem({ data: '*Type'}),
        new TableHeaderItem({ data: 'Store'}),
        new TableHeaderItem({ data: 'Path'}),
        new TableHeaderItem({ data: 'Code'}),
        new TableHeaderItem({ data: 'Usage'}),
        new TableHeaderItem({ data: 'Administative name (United State English)'}),
        new TableHeaderItem({ data: 'Display name (United State English)'}),
        new TableHeaderItem({ data: 'Short description (United State English)'})
      ];
    //   this.customModel.data = [
    //     [new TableItem({data: ''}), new TableItem({data: ''}), new TableItem({data: ''}), new TableItem({data: ''}),
    //     new TableItem({data: ''}), new TableItem({data: ''}), new TableItem({data: ''}), new TableItem({data: ''}),
    //     new TableItem({data: ''})]
    //   ];
  this.addRow();
  }

    closeMasterCategory() { }
    addAssociateRow() {
        this.showAssociate = false;
        this.showAssociateEdit = true;
        this.addRow();
    }
    addContentRow() {
      this.showContent = false;
      this.showContentEdit = true;
      this.addRow();
    }
    addReferencesRow() {
      this.showReferences = false;
      this.showReferencesEdit = true;
      this.addRow();
    }
    deleteNewRow() {
        console.log('hello');
    }

}
