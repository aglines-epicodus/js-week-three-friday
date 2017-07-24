import { Injectable } from '@angular/core';
import { Char } from './char.model';
import { CHARS } from './mock-chars';

@Injectable()
export class CharService {

  constructor() { }

  getChars() {
    return CHARS;
  }

  getCharById(charId: number){
    for (var i = 0; i <= CHARS.length -1; i++) {
      if (CHARS[i].id === charId) {
        return CHARS[i];
      }
    }
  }
}
