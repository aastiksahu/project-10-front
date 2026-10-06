import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  endpoint = "http://localhost:8080/Auth/signUp";

  form: any = {
    error: false,
    message: '',
    data: { id: null },
    inputerror: {},
  };

  constructor(private httpService: HttpServiceService, private router: Router) {
  }

  fileToUpload: any = null;

  onFileSelect(event: any) {
    this.fileToUpload = event.target.files.item(0);
    console.log(this.fileToUpload);

    // Create image preview
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.form.data.imagePreview = e.target.result;
    };

    reader.readAsDataURL(this.fileToUpload);
  }

  myFile() {

     if (!this.fileToUpload) {
        return;
    }

    const formData = new FormData();
    formData.append('file', this.fileToUpload);

    this.httpService.post(
      "http://localhost:8080/User/profilePic/" + this.form.data.id, formData, function (res: any) {

        if (res.success) {
          console.log("File Uploaded Successfully");
        } else {
          console.log("File Upload Failed");
        }
      }
    );
  }

  signUp() {
    var _self = this;
    this.httpService.post(this.endpoint, this.form.data, function (res: any) {

      console.log(res);

      _self.form.message = '';
      _self.form.inputerror = {};

      if (res.result.message) {
        _self.form.message = res.result.message;
      }

      _self.form.error = !res.success;
      if (_self.form.error && res.result.inputerror) {
        _self.form.inputerror = res.result.inputerror;
        return;
      }

      if (res.success) {

        // suppose backend returns saved user
        _self.form.data.id = res.result.data;

        console.log("User ID:", _self.form.data.id);

        if (_self.fileToUpload) {
          _self.myFile();
        }

      }
    });
  }

  reset() {
    location.reload();
  }

}


