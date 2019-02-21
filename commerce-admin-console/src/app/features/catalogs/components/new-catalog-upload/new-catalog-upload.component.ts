import { Component, OnInit, ViewChild, Input, OnChanges, TemplateRef, ViewEncapsulation } from '@angular/core';
import {
  TableItem,
  TableHeaderItem,
  TableModel,
} from 'carbon-components-angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CatalogUploadService } from '../../services/catalogUpload/catalog-upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-catalog-upload',
  templateUrl: './new-catalog-upload.component.html',
  styleUrls: ['./new-catalog-upload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewCatalogUploadComponent implements OnInit {

  constructor(private translate: TranslateService,
    private catalogUploadService: CatalogUploadService,
    private router: Router) { }

 
  size:any='';
  filename='';
  charecterSet='UTF-8';
  targetCatalog='Extendedsitescatalogstore Catalog';
  catalogInputData = [];
   
  listItm = [
    {
      id:1,
      content: "UTF-8",
      selected: false
    },
    {
      content: "UTF-16",
      selected: false,
    },
    {
      content: "GB2312",
      selected: false
    },
    {
      content: "Big5",
      selected: false
    },
    {
      content: "Windows Latin-1",
      selected: false
    },
    {
      content: "ISO 8859-1",
      selected: false
    }
  ];

  listItems = [
    {
      id:1,
      content: "ExtendedSitesCatalogAssetStore Catalog",
      selected: false
    },
    {
      content: "ExtendedSitesCatalogAssetStore B2B Direct",
      selected: false,
    },
    {
      content: "ExtendedSitesCatalogAssetStore Consumer Direct",
      selected: false
    },
    {
      content: "sc1",
      selected: false
    }
  ];
  

  @Input() title="File Uploader";
  @Input() description= "It accepts only xml or csv";
  @Input() buttonText= "Upload";
  @Input() accept=['.csv', '.xml'];
  @Input() multiple=false;

  
  saveCatalogData() {
    this.catalogInputData = [
        {'filename': this.filename, 'size': this.size, 'charecterSet': this.charecterSet, 'targetCatalog': this.targetCatalog }
    ];
    console.log(this.catalogInputData);
  }
  closeCatalogUpload(){
      this.router.navigate(['/catalogs']);
  }
  
  ngOnInit() {
    
  }
  getFileDetails(event) {
    // multiple
    // for (var i = 0; i < event.target.files.length; i++) { 
      var i=0;
      if(i < event.target.files.length){
      var fsize = event.target.files[i].size;
       this.filename = event.target.files[i].name;
      this.size= Math.round(fsize / 1024) +"KB";
      console.log ('Filename: ' + this.filename );
      console.log ('Size: ' + Math.round(fsize / 1024) + " KB");
      // return this.size+"KB";
      }
  }
  // getFilename(event) {
  //   // multiple
  //   // for (var i = 0; i < event.target.files.length; i++) { 
  //     var i=0;
  //     if(i < event.target.files.length){
  //       var name = event.target.files[i].name;
  //     console.log ('Filename: ' + name );
  //     // return this.size+"KB";
  //     }
  // }
}
