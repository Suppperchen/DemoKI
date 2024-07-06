import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-eye',
  templateUrl: './eye.component.html',
  styleUrl: './eye.component.css'
})
export class EyeComponent {


  imageBase64 = '';
  typeList = ['image/png','image/tiff','image/gif','image/jpeg'];
  warningMessage = '';
  showKIImage = 'data:image/png;base64,';
  show = false;

    constructor(private http: HttpClient) {}


    onFileSelected(event :any) {

      let file:File = event.target.files[0];
      if (file && this.typeList.includes(file.type)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.imageBase64 = reader.result as string;
          console.log(this.imageBase64);
          this.warningMessage = '';
        };
      }else {
        this.warningMessage = `the type "${file.type}" may not correct.`
        this.imageBase64 = '';
      }
    }
    sendImage():void{
      if(this.imageBase64!=''){
        let index = this.imageBase64.indexOf(',');
        const basestring = this.imageBase64.substring(index+1);
        var dataJson = {"image":basestring}
        const upload$ = this.http.post<any>("http://localhost:5000/post-retinal-vessel", dataJson);
        upload$.subscribe(res =>{
          this.showKIImage = this.showKIImage+res.KIImage;
          this.show = true;

        })
      }
    }



}
