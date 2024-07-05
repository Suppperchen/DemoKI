import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-eye',
  templateUrl: './eye.component.html',
  styleUrl: './eye.component.css'
})
export class EyeComponent {

  fileName = '';
  imageBase64 = '';

    constructor(private http: HttpClient) {}

    onFileSelected(event :any) {

        const file:File = event.target.files[0];

        if (file) {

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              const basestring = reader.result as string
              this.imageBase64 = reader.result as string
              console.log(basestring);
              console.log(basestring.length);

              let index = basestring.indexOf(',');
              console.log(index);
              console.log(basestring.at(index+1))
              console.log(basestring.substring(0,index+1))
              // const upload$ = this.http.post("http://localhost:5000/post-retinal-vessel", basestring);
              //
              // upload$.subscribe(answer =>{
              //   this.answerFromFlask = answer.toString();
              //   console.log(answer);
              //   console.log(this.answerFromFlask);});
    };
            //upload$.subscribe();
        }
    }

    toBase64 = (file: File) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

}
