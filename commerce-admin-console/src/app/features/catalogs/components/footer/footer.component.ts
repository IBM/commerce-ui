import { Component, OnInit,Input } from '@angular/core';
import { ModalService } from 'carbon-components-angular'
import { ModelPopupComponent } from '../model-popup/model-popup.component';
@Component({
  selector: 'ac-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

 
  @Input() modalText = "Footer sample model";
  @Input() theme: "light" | "dark" = "dark";
  @Input() size: "sm" | "md" | "lg" = "md";

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  openModal() {
    this.modalService.create({ component: ModelPopupComponent });
  }
}
