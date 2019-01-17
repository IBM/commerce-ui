import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-modelmessage',
  templateUrl: './modelmessage.component.html',
  styleUrls: ['./modelmessage.component.scss']
})
export class ModelmessageComponent implements OnInit {
  @Input() modalText = "Footer sample model";
  @Output() close = new EventEmitter<boolean>();
	closeModal(event: any): void {
		this.close.emit(false);
	}

  constructor() { }

  ngOnInit() {
  }
  
}
