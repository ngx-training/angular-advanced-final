import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerStatus'
})
export class CustomerStatusPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) {
      return 'thumb_down';
    }

    return value > 50 ? 'star_rate' : 'thumb_up';
  }
}
