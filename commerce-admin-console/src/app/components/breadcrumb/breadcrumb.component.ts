import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ac-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() pages: Array<Pages>;

  constructor() { }

  ngOnInit() {
  }

}

export interface Pages {
  name: string;
  link: string;
}
