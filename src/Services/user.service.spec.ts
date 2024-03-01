import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'


describe('UserService', () => {
  let service: UserService;

  let testingControler:HttpTestingController


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
    testingControler = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('logs a user in', ()=>{

    let mockUser = {
      first_name:"Daniel",
      last_name: "Muriithi",
      email:"muriithikiamad1@gmail.com",
      password:"12345678"
    }

    service.loginUser().subscribe(())
  })
});
