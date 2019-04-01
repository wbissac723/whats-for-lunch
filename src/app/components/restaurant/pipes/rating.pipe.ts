import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'rating' })
export class RatingPipe implements PipeTransform {
  transform(rating: number): string {
      switch (rating) {
        case 0:
            return 'zero_stars.png';
        case 1:
            return 'one_star.png';
        case 1.5:
            return 'one_plus_half.png';
        case 2:
            return 'two_stars.png';
        case 2.5:
            return 'two_plus_half.png';
        case 3:
            return 'three_stars.png';
        case 3.5:
            return 'three_plus_half.png';
        case 4:
            return 'four_stars.png';
        case 4.5:
            return 'four_plus_half.png';
        case 5:
            return 'five_stars.png';
      }
  }
}
