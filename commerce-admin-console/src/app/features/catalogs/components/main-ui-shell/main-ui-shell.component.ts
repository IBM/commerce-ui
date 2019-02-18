import { Component, OnInit, ViewChild, Input, OnChanges, TemplateRef,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-ui-shell',
  templateUrl: './main-ui-shell.component.html',
  styleUrls: ['./main-ui-shell.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class MainUiShellComponent implements OnInit {

  constructor() { }

  // @Input() size = 'sm';
  // @Input() ibmButton='primary';

  ngOnInit() {
  }
}
