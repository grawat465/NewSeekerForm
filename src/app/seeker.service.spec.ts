import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';

import { SeekerService } from './seeker.service';
import { Seeker } from './seeker';

describe('Seeker Service', () => {
  let service:SeekerService;
  let httpMock:HttpTestingController;
  beforeEach(() => {TestBed.configureTestingModule({
    providers:[SeekerService],
    imports:[HttpClientTestingModule]
  }),
  service=TestBed.get(SeekerService);
  httpMock=TestBed.get(HttpTestingController);
});
afterEach(()=>{
  httpMock.verify();
});
/*
it('should retreive posts from the API via GET',()=>{
const dummyPosts: Seeker[]=[{
 firstName:"Govind",
    lastName:"Rawat",
    password:"Captain123!",
    emailId:"grawat465@gmail.com",
     
     dob :new Date(startdob),
    address:"2nd street",
    mobileno:"9812516493",
    gender:"male",
    bio:"software",
    city:"jind",
    zipcode:"123456",
    country:"india",
    states:"haryana",
    username:"grawat465"
}]; 
service.requestLogin('grawat465','Captain123!').subscribe(posts =>{
expect(posts.valueOf).toBe(1);
expect(posts).toEqual(dummyPosts);

});
const request=httpMock.expectOne(`${service.userUrl}/seeker/login/emp/grawat465/Captain123!`);
expect(request.request.method).toBe('GET');
request.flush(dummyPosts);
});
*/

let startdob:"1996-01-02" ;

it('should retreive posts from the API via POST',()=>{
  const dummyPosts: Seeker[]=[{
    firstName:"Govind",
    lastName:"Rawat",
    password:"Captain123!",
    emailId:"grawat465@gmail.com",
     
     dob :new Date(startdob),
    address:"2nd street",
    mobileno:"9812516493",
    gender:"male",
    bio:"software",
    city:"jind",
    zipcode:"123456",
    country:"india",
    states:"haryana",
    username:"grawat465"
  }]; 
  service.signUpUser(dummyPosts).subscribe(posts =>{
  expect(posts.length).toBe(1);
  expect(posts).toEqual(dummyPosts);
  });
  const request=httpMock.expectOne(`${service.userUrl}/seeker/signup/emp`);
  expect(request.request.method).toBe('POST');
  request.flush(dummyPosts);
  });
  
  
});
