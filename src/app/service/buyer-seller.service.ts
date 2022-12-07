import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BuyerSellerService {
  constructor(private http: HttpClient) {}

  giveMedicine(data: any) {
    return this.http.post(`${environment.baseUrl}giver/addRequest`, data);
  }

  requestForMedicine(data:any){
    return this.http.post(`${environment.baseUrl}buyer/addRequest`, data);
  }

  getGiverList() {
    return this.http.get<any>(`${environment.baseUrl}giver/getList`);
  }

  getBuyerList(){
    return this.http.get<any>(`${environment.baseUrl}buyer/getList`);
  }

  updateGiverStatus(data: any) {
    return this.http.put<any>(`${environment.baseUrl}giver/updateStatus`, data);
  }

  updateBuyerStatus(data: any) {
    return this.http.put<any>(`${environment.baseUrl}buyer/updateStatus`, data);
  }
}
