import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dream-company';
  constructor (private http: HttpClient) {
    http.get('http://localhost:5000/food/shushi/asdkajshdkajshda').subscribe(data=>{
      console.log(data)
    })
  }
  onClickSubmit(data) {
    console.log(data.foodName)
    console.log(data.comment)
 }
}
