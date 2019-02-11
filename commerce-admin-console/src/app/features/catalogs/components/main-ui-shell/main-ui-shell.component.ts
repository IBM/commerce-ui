import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-ui-shell',
  templateUrl: './main-ui-shell.component.html',
  styleUrls: ['./main-ui-shell.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class MainUiShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  menuClicked: () => {};
}
