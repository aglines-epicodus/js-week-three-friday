import { Component, OnInit } from '@angular/core';
import { Char } from '../char.model';
import { Router } from '@angular/router';
import { CharService } from '../char.service';


@Component({
  selector: 'app-listchar',
  templateUrl: './listchar.component.html',
  styleUrls: ['./listchar.component.css'],
  providers: [CharService]
})

export class ListcharComponent implements OnInit {
  chars: Char[];

  constructor(private router: Router, private charService: CharService){}

  ngOnInit() {
    this.chars = this.charService.getChars();
  }

  goToCharPage(clickedChar: Char) {
    this.router.navigate(['chars', clickedChar.id]);
  };


}
