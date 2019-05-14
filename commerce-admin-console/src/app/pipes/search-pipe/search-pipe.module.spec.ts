import { SearchPipeModule } from './search-pipe.module';

describe('SearchPipeModule', () => {
  let searchPipeModule: SearchPipeModule;

  beforeEach(() => {
    searchPipeModule = new SearchPipeModule();
  });

  it('should create an instance', () => {
    expect(searchPipeModule).toBeTruthy();
  });
});
