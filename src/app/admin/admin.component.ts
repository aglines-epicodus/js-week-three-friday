import { Component, OnInit } from '@angular/core';
import { CharService } from '../char.service';
import { Char } from '../char.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CharService]
})
export class AdminComponent implements OnInit {

  constructor(private CharService: CharService) { }

  ngOnInit() {
  }

  submitForm(charname: string, desc: string, evil: string) {
      var newChar: Char = new Char(charname, desc, evil);
      this.charService.addChar(newChar);
      // console.log(newChar);
    }
}
