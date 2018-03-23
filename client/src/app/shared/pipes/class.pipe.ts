import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'byClass',  pure: false })

export class ClassPipe implements PipeTransform {
  transform(items: any[], filterGroups: any[]): any {
    if(!items) 
    { 
      return [];
    }
    else if(!filterGroups) 
    {
      return items;
    }
    else
    {
      var result= items.filter( item =>
      {      
        var found = filterGroups.find(function(element){
          return element.data.id == item.class_id;
        });
        return found;

      });
      return result;
    } 
  }
}


