import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArthService {
  constructor() { }
  add(v1,v2){
    var res;
    res=parseInt(v1)+parseInt(v2);
    return res;
  }
  sub(v1,v2,cb){
    var res;
    res = v1-v2;
    cb(res);
  }
  multiply(v1,v2){
    var res;
    res=v1*v2;
    return Promise.resolve(res);
  }
  reminder(v1,v2){
    var res;
    res=v1%v2;
    return of(res);
  }

}
