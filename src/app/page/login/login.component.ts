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
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const googleLogoURL =
  "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // customer: Partial<Trainer> = {};
  // errorMessage: string = '';
  // hide: boolean;

  // loginForm = this.fb.group({
  //   emailId: ['', [Validators.email, Validators.required]],
  //   password: ['', [Validators.required]],
  // });

  auth2: any;

  @ViewChild('loginRef', { static: true }) loginElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}

