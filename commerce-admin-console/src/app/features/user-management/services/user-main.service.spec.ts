import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';
import { UserMainService } from './user-main.service';
import { BaseRequestOptions, Http } from '@angular/http';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HttpClientModule } from '@angular/common/http';
import { async } from 'q';

fdescribe('UserMainService', () => {
  let service: UserMainService;
  let backend: MockBackend;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, BrowserDynamicTestingModule],
    providers: [
      UserMainService,
      MockBackend,
      BaseRequestOptions,
      {
        provide: Http,
        useFactory: (backend, options) => new Http(backend, options),
        deps: [MockBackend, BaseRequestOptions]
      }
    ]
  }));
  it('should be created UserMainService', async(() => {
    const service: UserMainService = TestBed.get(UserMainService);
    expect(service).toBeTruthy();
  }));
  backend = TestBed.get(MockBackend);
  service = TestBed.get(UserMainService);

  // it('organizationListApi should return organizationList', fakeAsync(() => {
  //   let fakeResponse = {
  //     "resultCount": 1,
  //     "results": [
  //       {
  //         "artistId": 78500,
  //         "artistName": "U2",
  //         "trackName": "Beautiful Day",
  //         "artworkUrl60": "image.jpg",
  //       }]
  //   };

  //   // backend.connections.subscribe(connection => {
  //   //   connection.mockRespond(new Response({
  //   //     body: JSON.stringify();
  //   //   }));
  //   // });
  //   service.organizationListApi();
  //   tick();
  //   expect(fakeResponse.results.length).toBe(1);
  // }));

});
