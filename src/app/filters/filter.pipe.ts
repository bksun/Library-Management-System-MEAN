import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTitle'
})

export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.title.toLowerCase().includes(searchText) ||  it.author.toLowerCase().includes(searchText) ||  it.isbn.toLowerCase().includes(searchText);
    });
   }

 }