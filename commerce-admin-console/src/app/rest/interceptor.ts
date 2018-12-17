import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, Observer, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ApiConfiguration } from './api-configuration';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	constructor(private authService: AuthService, private apiConfiguration: ApiConfiguration) {}

	intercept(request: HttpRequest<any>, nextHttpHandler: HttpHandler): Observable<HttpEvent<any>> {
		if (request.url.indexOf(this.apiConfiguration.rootUrl) === 0) {
			return new Observable<HttpEvent<any>>((observer: Observer<HttpEvent<any>>) => {
				if (AuthService.jwt) {
					this.sendAuthenticatedRequest(request, nextHttpHandler, observer, null);
				}
				else {
					const isTokenValidSubscription: Subscription = this.authService.isTokenValid.subscribe((isTokenValid: boolean) => {
						if (isTokenValid) {
							this.sendAuthenticatedRequest(request, nextHttpHandler, observer, isTokenValidSubscription);
						}
					});
				}
			});
		}
		else {
			return nextHttpHandler.handle(request);
		}
    }
	
	sendAuthenticatedRequest(request: HttpRequest<any>, nextHttpHandler: HttpHandler, observer: Observer<HttpEvent<any>>, isTokenValidSubscription: Subscription): void {
		const jwtRequest: HttpRequest<any> = request.clone({
			setHeaders: {
				'Authorization': `Bearer ${AuthService.jwt}`,
			}
		});
		nextHttpHandler.handle(jwtRequest).subscribe(
			response => {
				if (isTokenValidSubscription) {
					isTokenValidSubscription.unsubscribe();
				}
				observer.next(response);
			},
			err => {
				if (err.status === 401) {
					this.authService.setJwt(null);
					if (!isTokenValidSubscription) {
						isTokenValidSubscription = this.authService.isTokenValid.subscribe((isTokenValid: boolean) => {
							if (isTokenValid) {
								this.sendAuthenticatedRequest(request, nextHttpHandler, observer, isTokenValidSubscription);
							}
						});
					}
				}
				else {
					if (isTokenValidSubscription) {
						isTokenValidSubscription.unsubscribe();
					}
					observer.error(err);
				}
			},
			() => {
				observer.complete();
			}
		);
	}
}
