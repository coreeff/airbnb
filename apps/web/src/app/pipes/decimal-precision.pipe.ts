import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'decimalPrecision',
})
export class DecimalPrecisionPipe implements PipeTransform {
  transform(value: number, precision: number = 1): string {
    if (isNaN(value)) {
      return '';
    }

    return value.toFixed(precision);
  }
}
