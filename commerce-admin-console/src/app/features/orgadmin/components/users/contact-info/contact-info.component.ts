import { Component, OnInit, Input } from '@angular/core';
import { NotificationDisplayService } from 'carbon-components-angular';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'ac-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactInfoComponent implements OnInit {
  @Input() label = 'Title (Optional)';
  constructor() { }
  model: '';
  disabled: '';
  items = [
    {
      content: 'Mr.',
      selected: false
    },
    {
      content: 'Mrs.',
      selected: false,
    }
  ];
  ngOnInit() {
  }
}
