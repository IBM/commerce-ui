import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { IframeService } from '../services/iframe.service';
import { AuthService } from '../services/auth.service';

export function createRootTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createRootTranslateLoader),
        deps: [HttpClient],
      }
    })
  ],
  exports: [
    TranslateModule
  ],
  declarations: []
})
export class SharedModule {

  constructor( public translateService: TranslateService,
    private authService: AuthService) {
      this.translateService.setDefaultLang('en');
      authService.language.subscribe(language => {
        this.translateService.use(language);
      })
    }

  
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [TranslateService, IframeService]
    }
  }

}
