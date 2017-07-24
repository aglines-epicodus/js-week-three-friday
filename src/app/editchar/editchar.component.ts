import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Char } from '../char.model';



@Component({
  selector: 'app-editchar',
  templateUrl: './editchar.component.html',
  styleUrls: ['./editchar.component.css']
})
export class EditcharComponent implements OnInit {
  charId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.charId = parseInt(urlParameters['id']);
    });
  }

}
