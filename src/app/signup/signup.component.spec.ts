import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, 
      MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSnackBarModule, MatRadioModule, MatTabsModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule, MatCardAvatar, MatCardActions} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';



import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpModule} from '@angular/http';


import { SignupComponent } from './signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';
import { SeekerService } from '../seeker.service';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent,
        SignupComponent,AppComponent ],
        imports: [
          RouterTestingModule,
          BrowserModule,
          AppRoutingModule,
          FormsModule,
          ReactiveFormsModule,
          BrowserAnimationsModule,
          MatButtonModule,
          MatCheckboxModule,
          MatGridListModule,
          MatCardModule,
          MatIconModule,
          MatInputModule,
          MatDatepickerModule,
          MatNativeDateModule,
          MatSelectModule,
          MatSnackBarModule,
          MatRadioModule,
          MatTabsModule,
         HttpClientTestingModule,
          HttpModule,RouterModule
        ],
        providers:[SeekerService]
    })
  
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.userDetailsForm.valid).toBeFalsy();
  });
  it('firstname field validity', () => {
    let firstName= component.userDetailsForm.controls['firstname']; 
    expect(firstName.valid).toBeFalsy(); 
  });
  it('firstname field validity', () => {
    let errors = {};
    let firstName = component.userDetailsForm.controls['firstname'];
    errors = firstName.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });
  it('lastname field validity', () => {
    let lastName= component.userDetailsForm.controls['lastname']; 
    expect(lastName.valid).toBeFalsy();

});
it('last field validity', () => {
  let errors = {};
  let lastName = component.userDetailsForm.controls['lastname'];
  errors = lastName.errors || {};
  expect(errors['required']).toBeTruthy(); 
});
it('password field validity', () => {
  let passWord= component.userDetailsForm.controls['password']; 
  expect(passWord.hasError).toBeFalsy(); 
});
it('pass field validity', () => {
  let errors = {};
  let pass = component.userDetailsForm.controls['password'];
  errors = pass.errors || {};
  expect(errors['required']).toBeTruthy();
});

it('email field validity', () => {
  let mail= component.userDetailsForm.controls['email']; 
  expect(mail.hasError).toBeFalsy(); 
});
it('email field validity', () => {
  let mail= component.userDetailsForm.controls['email']; 
  expect(mail.valid).toBeFalsy(); 
});
it('mail field validity', () => {
  let errors = {};
  let mail = component.userDetailsForm.controls['email'];
  errors = mail.errors || {};
  expect(errors['required']).toBeTruthy(); 
});
it('gender  field validity', () => {
  let gen= component.userDetailsForm.controls['gender']; 
  expect(gen.hasError).toBeFalsy(); 
});
it('gender field validity', () => {
  let errors = {};
  let gen = component.userDetailsForm.controls['gender'];
  errors = gen.errors || {};
  expect(errors['required']).toBeTruthy(); 
});

});
