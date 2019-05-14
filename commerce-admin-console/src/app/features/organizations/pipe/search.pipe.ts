import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {

	transform(items: any[], searchText: string): any[] {
		if (!items) {
			return [];
		}
		if (!searchText) {
			return items;
		}
		searchText = searchText.toLowerCase();
		let filteredItems: any[] = items.filter( element => {
			return element.name.toLowerCase().includes(searchText);
		});
		return filteredItems;
	}

}
