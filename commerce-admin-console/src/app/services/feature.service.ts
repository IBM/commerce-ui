import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FeatureService {
	public darkFeatures;
	public darkFeaturesValid: Subject<boolean> = new Subject<boolean>();
	
	setDarkFeatures(darkFeatures) {
		this.darkFeatures = darkFeatures;
		this.darkFeaturesValid.next(true);
	}
}
