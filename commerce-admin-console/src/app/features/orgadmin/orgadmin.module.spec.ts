import { OrgadminModule } from './orgadmin.module';

describe('OrgadminModule', () => {
  let orgadminModule: OrgadminModule;

  beforeEach(() => {
    orgadminModule = new OrgadminModule();
  });

  it('should create an instance', () => {
    expect(orgadminModule).toBeTruthy();
  });
});
