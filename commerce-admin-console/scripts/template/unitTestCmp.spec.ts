/*******************************************************************************
 * Copyright IBM Corp. 2018
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
import { HttpModule, Http, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { UnitTestTemplate } from './filename.component';

describe('UnitTestTemplate', () => {

  let component: UnitTestTemplate;
  let fixture: ComponentFixture<UnitTestTemplate>;

  beforeEach((done) =>{
    TestBed.configureTestingModule({
        declarations: [UnitTestTemplate],
        imports: [],
        providers: []
    }).compileComponents();
    done();
  });

  beforeEach((done)=> {
    fixture = TestBed.createComponent(UnitTestTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
    done();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('your tests start here', () => {
    // first test
  });

});
