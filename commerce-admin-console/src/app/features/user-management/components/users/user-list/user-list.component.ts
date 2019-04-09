import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { TableModel, TableHeaderItem, TableItem } from 'carbon-components-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() striped: boolean = false;
  
  @Input() model = new TableModel();
  
  @Input() get totalDataLength() {
    return this.model.totalDataLength;
  }
  set totalDataLength(value) {
    this.model.totalDataLength = value;
  }
  
  @ViewChild('paginationTableItemTemplate')
  protected paginationTableItemTemplate: TemplateRef<any>;
  




  constructor(private router: Router) { }
  

  ngOnInit() {
    
  
    this.model.data = [[]];
    this.model.header = [
      new TableHeaderItem({ data: 'Login ID' }),
      new TableHeaderItem({ data: 'First name' }),
      new TableHeaderItem({ data: 'Last name' }),
      new TableHeaderItem({ data: 'Organization' }),
      new TableHeaderItem({ data: 'Role' }),
      new TableHeaderItem({ })
    ];
    this.model.pageLength = 10;
    this.model.totalDataLength = 15;
    
    
    this.selectPage(1);
  }
  customSort(index: number) {
    this.sort(this.model, index);
  }
  sort(Tablemodel, index: number) {
    if (Tablemodel.header[index].sorted) {
      // if already sorted flip sorting direction
      Tablemodel.header[index].ascending = Tablemodel.header[index].descending;
    }
    Tablemodel.sort(index);
  }

  getPage(page: number) {
    const line = line => [`dave_evans`, `Dave`,`Evans`,`Organization A`,`Site Administrator`,``];

    const fullPage = [];

    for (
<<<<<<< HEAD
      let i = (page - 1) * this.model.pageLength;
      i < page * this.model.pageLength && i < this.model.totalDataLength;
      i++
    ) {
      fullPage.push(line(i + 1));
=======
     let i = (page - 1) * this.model.pageLength;
     i < page * this.model.pageLength && i < this.model.totalDataLength;
     i++
    ) {
     fullPage.push(line(i + 1));
>>>>>>> added organizations components
    }

    return new Promise(resolve => {
      setTimeout(() => resolve(fullPage), 150);
<<<<<<< HEAD
=======
      this.usersService.UsersGetManageableUsers({
        offset:(page-1)*this.model.pageLength,
        limit:this.model.pageLength
      }).subscribe((body: any) => {
        this.model.totalDataLength = body.count;
        let data = [];
        for (let i = 0; i < body.items.length; i++) {
          let item = body.items[i];
          let logonId = item.logonId;
          let firstName = item.address ? item.address.firstName : '';
          let lastName = item.address ? item.address.lastName : '';
          let organizationName = item.organizationName;
          data.push([logonId, firstName, lastName, organizationName, '', '']);
        }
        resolve(data);
      });
>>>>>>> added organizations components
    });
  }

  selectPage(page) {
    
    this.getPage(page).then((data: Array<Array<any>>) => {
      // set the data and update page
      this.model.data = this.prepareData(data);
      this.model.currentPage = page;
    });
  }

  protected prepareData(data: Array<Array<any>>) {
    // create new data from the service data
    let newData = [];
    data.forEach(dataRow => {
      let row = [];
      dataRow.forEach(dataElement => {
        row.push(
          new TableItem({
            data: dataElement,
            template: typeof dataElement === 'string' ? undefined : this.paginationTableItemTemplate,
            // your template can handle all the data types so you don't have to conditionally set it
            // you can also set different templates for different columns based on index
          })
        );
      });
      newData.push(row);
    });
    return newData;
  }
  createUser() {
    this.router.navigate(['users/userAccount']);
  }

}
