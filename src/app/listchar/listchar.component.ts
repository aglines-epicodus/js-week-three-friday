import { Component, OnInit } from '@angular/core';
import { Char } from '../char.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listchar',
  templateUrl: './listchar.component.html',
  styleUrls: ['./listchar.component.css']
})
export class ListcharComponent {

  constructor(private router: Router){}

  chars: Char[] = [
    new Char("Agent Cooper", "FBI agent assigned to investigate the murder of Laura Palmer", "0", 1),
    new Char("Laura Palmer", "Twin Peaks resident discovered dead in the first scene", "0", 2)
  ];

  goToCharPage(clickedChar: Char) {
    this.router.navigate(['chars', clickedChar.id]);
  };

}
