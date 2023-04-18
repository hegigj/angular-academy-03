import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addChar',
  pure: true
})
export class AddCharPipe implements PipeTransform {

  transform(value: string, char: string): string;
  transform(value: string, beforChar: string, afterChar: string): string;
  transform(value: string, char: string, afterChar?: string): string {
    if (afterChar) {
      return `${char}${value}${afterChar}`;
    }
    return `${char}${value}${char}`;
  }
}
