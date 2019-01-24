import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'ac-model-popup',
  templateUrl: './model-popup.component.html',
  styleUrls: ['./model-popup.component.scss']
})
export class ModelPopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // @Input() modalText = "Footer sample model";
  // @Output() close = new EventEmitter<boolean>();
	// closeModal(event: any): void {
	// 	this.close.emit(false);
	// }
}
