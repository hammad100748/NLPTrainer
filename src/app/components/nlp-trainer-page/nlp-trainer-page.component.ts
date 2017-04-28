import { Component, OnInit } from '@angular/core';
import {FileHandlerService} from "../../services/file-handler.service";
import {Http} from "@angular/http";

@Component({
  selector: 'app-nlp-trainer-page',
  templateUrl: './nlp-trainer-page.component.html',
  styleUrls: ['./nlp-trainer-page.component.css']
})
export class NlpTrainerPageComponent implements OnInit {

  data=[];

  intents=["file_search","personality"];
  entities=["object_to_search","file_type","source","datetime"];

  constructor(private _fileHandler:FileHandlerService, private http:Http) { }

  ngOnInit() {

    this._fileHandler.getJsonData()
      .subscribe(data => this.data = data,
        err => console.log(err),
        () => console.log(this.data));
  }

  selectIntent(value){
    console.log(value);
  }

  selectEntity(value,entity){

  }

}
