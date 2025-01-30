import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppStateServiceService } from '../app-state-service.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-page3',
  imports: [RouterLink, FormsModule,],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {
  textareavalue: string = '';
  constructor(private httpClient:HttpClient, private jason:AppStateServiceService){}
  sendStuff(url:string){
    this.httpClient.post(url.trim(),this.jason.jsonTime()).subscribe((data) => {
     
    });
    console.log(this.jason.jsonTime())
  }
  
}
