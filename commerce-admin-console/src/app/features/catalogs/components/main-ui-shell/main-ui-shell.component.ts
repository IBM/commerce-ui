import { Component, OnInit, ViewChild, Input, OnChanges, TemplateRef,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-main-ui-shell',
  templateUrl: './main-ui-shell.component.html',
  styleUrls: ['./main-ui-shell.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class MainUiShellComponent implements OnInit {
 

  constructor(private _AR: ActivatedRoute, private router: Router) { }

  // @Input() size = 'sm';
  // @Input() ibmButton='primary';
  catalog(){
    this.router.navigate(["/catalogs"]);
  }
  ngOnInit() {
  }
}
