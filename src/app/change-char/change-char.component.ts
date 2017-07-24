import { Component, Input, OnInit } from '@angular/core';
import { Char } from '../char.model';
import { CharService } from '../char.service';

@Component({
  selector: 'app-change-char',
  templateUrl: './change-char.component.html',
  styleUrls: ['./change-char.component.css'],
  providers: [CharService]
})

export class ChangeCharComponent implements OnInit {
  @Input() selectedChar;

  constructor(private charService: CharService) { }

  ngOnInit() {
  }

  beginUpdatingChar(charToUpdate){
    this.charService.updateChar(charToUpdate);
  }

}
