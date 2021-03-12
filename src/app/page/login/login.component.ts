import { Component, NgZone, OnInit } from '@angular/core';
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

const googleId='331060380462-d27i3dlgau7nivh0n98p1cs9k1gqrijn.apps.googleusercontent.com'

const googleLogoURL =
  "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  trainer: Partial<Trainer>={};
  errorMessage: string = '';
  hide: boolean;

  loginForm = this.fb.group({
    trainerEmail: ['', [Validators.email, Validators.required]],
    trainerPassword: ['', [Validators.required]],
  });

  auth2: any;

  @ViewChild('loginRef', { static: true }) loginElement: ElementRef;

  constructor(private fb: FormBuilder,private router: Router,
    private trainerService: TrainerService,
    private domSanitizer: DomSanitizer,
    private ngZone: NgZone,) { }

  ngOnInit(): void {
    this.googleSDK();
  }

  googleSDK() {
    console.log("hey")
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: googleId ,
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
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        this.trainer.trainerEmail = profile.getEmail();

        this.ngZone.run(() => this.trainerService.trainerGoogleLoginRequest(this.trainer).subscribe(
          (res) => {
            this.trainerService = res;
            this.loginForm.reset;
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('token', JSON.stringify(this.trainer));
            this.router.navigateByUrl('/assessments');
          },
          (error) => {
            if (typeof error.error == typeof 'string')
              this.errorMessage = error.error;
          }
        ));
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
}

