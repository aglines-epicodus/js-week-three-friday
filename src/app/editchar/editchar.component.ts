import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Char } from '../char.model';
import { CharService } from '../char.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-editchar',
  templateUrl: './editchar.component.html',
  styleUrls: ['./editchar.component.css'],
  providers: [CharService]
})

export class EditcharComponent implements OnInit {
  charId;
  charToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private charService: CharService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.charId = urlParameters['id'];
    });
    this.charToDisplay = this.charService.getCharById(this.charId);
  }

}
