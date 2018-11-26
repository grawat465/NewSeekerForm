import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient} from '@angular/common/http';
import {Seeker} from './seeker';


const httpOptions={
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200', // -->Add this line
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': '*',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
})
}


@Injectable({
  providedIn: 'root'
})
export class SeekerService {

  constructor(private http : HttpClient) { }

  /**
   * name
   */
  public name() {
    
  } userUrl = 'http://localhost:9090';


public signUpUser(Seeker){

  return this.http.post<Seeker[]>(this.userUrl+"/seeker/signup/emp", Seeker)
}



public requestLogin(username,password) {

    return this.http.get<boolean>(this.userUrl+"/seeker/login/emp/"+username+"/"+password);
  }
}

