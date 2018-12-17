import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { PersonService } from '../../rest/services/person.service';
import { AppConstants } from '../../app.constants';

@Injectable()
export class SearchService {

  private storeId: string;
  private registerType: 'R' | 'G' | 'RG' | 'A';
  private profileName: 'IBM_User_List_Summary' | 'IBM_User_List_Details';
  private orderByTableName: 'ADDRESS';
  private orderByFieldName: 'ADDRESS_ID';
  private logonId: string;
  private lastName: string;
  private firstName: string;
  private email: string;
  private maxResults: string;
  private startIndex: string;

  private personListUpdateSource = new Subject<object>();
  public personsData$ = this.personListUpdateSource.asObservable();

  private readonly DEFAULT_START_INDEX = 0;
  private readonly DEFAULT_PAGE_SIZE = 25;

  constructor(private personService: PersonService) {
    this.storeId = AppConstants.DEFAULT_STORE_ID.toString();
    this.maxResults = this.DEFAULT_PAGE_SIZE.toString();
    this.startIndex = this.DEFAULT_START_INDEX.toString();
  }

  public getLogonId() {
    return this.logonId;
  }

  public getLastName() {
    return this.lastName;
  }

  public getFirstName() {
    return this.firstName;
  }

  public setLogonId(logonId: string) {
    this.logonId = logonId;
  }

  public setLastName(lastName: string) {
    this.lastName = lastName;
  }

  public setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  public getPageSize() {
    return this.maxResults;
  }

  public getPageNumber() {
    return parseInt(this.startIndex) / parseInt(this.maxResults) + 1;
  }

  public setPageNumber(pageNumber: number) {
    this.startIndex = ((pageNumber - 1) * parseInt(this.maxResults)).toString();
  }

  private generateSearchRequestParameters() {
    return {
      storeId: this.storeId,
      maxResults: this.maxResults,
      startIndex: this.startIndex,
      logonId: this.logonId,
      lastName: this.lastName,
      firstName: this.firstName
    };
  }

  public searchPersons() {
    console.log("searching");
    if (!this.logonId && !this.firstName && !this.lastName) {
      let response = this.personService.PersonFindByQuery({
        storeId: this.storeId,
        q: 'usersICanAdmin',
        maxResults: this.maxResults,
        startIndex: this.startIndex
      });
      response.subscribe((result: any) => {
        result.pageNumber = this.getPageNumber();
        this.personListUpdateSource.next(result);
      });
    } else {
      let response = this.personService.PersonFindByUserSearch(this.generateSearchRequestParameters());
      response.subscribe((result: any) => {
        result.pageNumber = this.getPageNumber();
        this.personListUpdateSource.next(result);
      });
    }
  }

}
