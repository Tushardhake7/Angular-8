import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipePipe implements PipeTransform {

  transform(imgList: any, search: string): unknown {
    if (!search) return imgList;
    else {
    return imgList.filter(x => x.cat.toLowerCase().indexOf(search.toLowerCase()) !==-1);
    }
  }
}
