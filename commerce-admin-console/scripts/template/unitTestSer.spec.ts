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
import { TestBed, inject } from '@angular/core/testing';
import { UnitTestTemplate } from './filename.service';

describe('UnitTestTemplate', () => {

  let service: UnitTestTemplate

  beforeEach((done) =>{
    // use mock service for dependency
    TestBed.configureTestingModule({
        imports: [],
        providers: [UnitTestTemplate]
    });
    done();
  });

  beforeEach(inject([UnitTestTemplate], _service => {
    service = _service;
  }));

  it('should instantiate', () => {
    expect(service).toEqual(jasmine.any(UnitTestTemplate));
  });

  it('your tests start here', () => {
    // first test
  });

});
