import { Component, OnInit, Injector, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalService, Modal } from "carbon-components-angular";
import { SearchService } from '../../search-service.service';

@Modal()
@Component({
  selector: 'ac-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {

  closeModal: Function;
  firstName: string;
  lastName: string;
  logonId: string;

	constructor(private searchService:SearchService) {

	}

	ngOnInit() {

	}

	search() {
      this.searchService.setFirstName(this.firstName);
      this.searchService.setLastName(this.lastName);
      this.searchService.setLogonId(this.logonId);
      this.searchService.searchPersons();
			this.closeModal();
  }
  
}
