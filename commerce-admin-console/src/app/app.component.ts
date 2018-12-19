import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';
import { FeatureService } from './services/feature.service';
import { TranslateService } from '@ngx-translate/core';

@Component({ 
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(private authService: AuthService,
				private featureService: FeatureService,
				private translate: TranslateService) {
		translate.setDefaultLang('en');
		this.addMessageListener();
		window.top.postMessage({"action":"FETCH_RENDER_VIEW_DATA"}, '*');
		window.top.postMessage({"action":"DARK_FEATURES_FETCH_REQUEST"}, '*');
	}

	addMessageListener() {
		window.addEventListener('message', (event) => {
			const eventData = event.data;

			if (eventData && eventData.data) {
				if (eventData.action === 'JWT') {
					let jwt = eventData.data.token;
					if (jwt) {
						this.authService.setJwt(jwt);
					}
				}
				else if (eventData.action === 'RENDER_VIEW_DATA') {
					let jwt = eventData.data.token;
					if (jwt) {
						this.authService.setJwt(jwt);
					}
					let language = eventData.data.language;
					if (language) {
						// localStorage.setItem("language", language);
						this.authService.setLanguage(language);
					}
				}
				else if (eventData.action === 'DARK_FEATURES') {
					let darkFeatures = eventData.data.darkFeatures;
					if (darkFeatures) {
						this.featureService.setDarkFeatures(darkFeatures);
					}
				}
			}
		});
	}
}
