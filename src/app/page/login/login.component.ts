import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Trainer } from 'src/app/model/Trainer';
import { TrainerService } from 'src/app/service/trainer/trainer.service';

const googleLogoURL =
  "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  trainer: Trainer;
  errorMessage: string = '';
  hide: boolean;

  loginForm = this.fb.group({
    trainerEmail: ['', [Validators.email, Validators.required]],
    trainerPassword: ['', [Validators.required]],
  });

  auth2: any;

  @ViewChild('loginRef', { static: true }) loginElement: ElementRef;

  constructor(private fb: FormBuilder,private router: Router,
    private trainerService: TrainerService) { }

  ngOnInit(): void {
  }

  googleSDK() {

    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '331060380462-d27i3dlgau7nivh0n98p1cs9k1gqrijn.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLoginButton();
      });
    }

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));

  }


  login() {
    if (this.loginForm.valid) {
        this.trainerService.trainerLoginRequest(this.loginForm.value).subscribe(
          (res) => {
            this.trainer = res;
            this.loginForm.reset;
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('token', JSON.stringify(this.trainer));
            localStorage.setItem('cart', JSON.stringify([]));
            this.router.navigateByUrl('/assessments');
          },
          (error) => {
            if (typeof error.error == typeof 'string')
              this.errorMessage = error.error;
            // else {
            //   this.trainer = error.error;
            //   console.log(this.trainer);
  
            // }
          }
        );
    }
  }

  prepareLoginButton() {

    console.log("prepare")
  }
}

