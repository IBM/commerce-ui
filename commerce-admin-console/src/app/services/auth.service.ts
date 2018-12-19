import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
	static jwt: string;
	isTokenValid: Subject<boolean> = new Subject<boolean>();
	language: Subject<string> = new Subject<string>();

	setJwt(token: string) {
		if (token !== AuthService.jwt) {
			AuthService.jwt = token;
			if (!token) {
				this.isTokenValid.next(false);
				window.top.postMessage({"action":"JWT_FETCH_REQUEST"}, '*');
			}
			else {
				this.isTokenValid.next(true);
			}
		}
	}
	
	setLanguage(language: string) {
		this.language.next(language);
	}

}
