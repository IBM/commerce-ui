import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule, Provider, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from "@angular/http";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiConfiguration } from './rest/api-configuration';
import { ApiModule } from './rest/api.module';
import { FormsModule } from '@angular/forms';

import { AppConstants } from './app.constants';
import { NFormsModule, TableModule, DropdownModule, IconModule } from 'carbon-components-angular';
import { AuthService } from './services/auth.service';
import { FeatureService } from './services/feature.service';
import { FeatureEnabledDirective } from './directives/feature-enabled.directive';
import { FeatureDisabledDirective } from './directives/feature-disabled.directive';
import { JwtInterceptor } from './rest/interceptor';
import { SharedModule } from './shared/shared.module';

export function initApiConfiguration(config: ApiConfiguration): () => Promise<any> {
	return (): Promise<any> => {
		return new Promise((resolve, reject) => {
			if (window.parent !== window) {
				const eventListener = (event) => {
					const eventData = event.data;
					if (eventData && eventData.data) {
						if (eventData.action === 'API_HOST') {
							const apiHost = eventData.data.apiHost;
							if (apiHost) {
								config.rootUrl = apiHost + AppConstants.URL_BASE;
								window.removeEventListener('message', eventListener);
								resolve();
							}
						}
					}
				}
				window.addEventListener('message', eventListener);
				window.top.postMessage({"action":"API_HOST_FETCH_REQUEST"}, '*');
			}
			else {
				resolve();
			}
		});
	};
}

export const INIT_API_CONFIGURATION: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initApiConfiguration,
  deps: [ApiConfiguration],
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    FeatureEnabledDirective,
    FeatureDisabledDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    HttpModule,
    IconModule,
    NFormsModule,
    TableModule,
    SharedModule.forRoot(),
    ApiModule
  ],
  providers: [
    INIT_API_CONFIGURATION,
    AuthService,
    FeatureService,
    {
    	provide: HTTP_INTERCEPTORS,
    	useClass: JwtInterceptor,
    	multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
