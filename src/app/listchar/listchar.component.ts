import { Component, OnInit } from '@angular/core';
import { Char } from '../char.model';
import { Router } from '@angular/router';
import { CharService } from '../char.service';
import { FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'app-listchar',
  templateUrl: './listchar.component.html',
  styleUrls: ['./listchar.component.css'],
  providers: [CharService]
})

export class ListcharComponent implements OnInit {
  chars: FirebaseListObservable<any[]>;

  constructor(private router: Router, private charService: CharService){}

  ngOnInit() {
    this.chars = this.charService.getChars();
  }

  goToCharPage(clickedChar: Char) {
    // this.router.navigate(['chars', clickedChar.id]);
  };


}
