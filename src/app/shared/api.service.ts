import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postMedicine(data : any){
    return this.http.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res: any)=>{
      console.log(res);
      return res;
    }))
  }

  getMedicine(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  updateMedicine(data:any , id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  deleteMedicine(id : number){
    return this.http.get<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res: any)=>{
      return res;
    }))
  }


}

