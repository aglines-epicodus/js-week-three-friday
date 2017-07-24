import { Injectable } from '@angular/core';
import { Char } from './char.model';
import { CHARS } from './mock-chars';

@Injectable()
export class CharService {

  constructor() { }

  getChars() {
    return CHARS;
  }
}
