import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  constructor(private http: HttpClient) {}

  addMedicine(data: any) {
    return this.http.post<any>(`${environment.baseUrl}medicine/add`, data);
  }
  getMedicine(filter = {}) {
    return this.http.post<any>(
      `${environment.baseUrl}medicine/getMedicine`,
      filter
    );
  }
  deleteMedicine(id: any) {
    return this.http.delete<any>(
      `${environment.baseUrl}medicine/deleteMedicine/${id}`
    );
  }
  updateMedicine(id: any, data: any) {
    return this.http.put<any>(
      `${environment.baseUrl}medicine/updateMedicine/${id}`,
      data
    );
  }

  getMedicineForPharmacist() {
    return this.http.get<any>(
      `${environment.baseUrl}medicine/getMedicineForPharmacist`
    );
  }

  getMedicineForDemanders() {
    return this.http.get<any>(
      `${environment.baseUrl}medicine/getMedicineForDemanders`
    );
  }

  updateMedicineStatus(id: any, data: any) {
    return this.http.put<any>(
      `${environment.baseUrl}medicine/updateStatus/${id}`,
      data
    );
  }

  buyMedicine(data: any) {
    return this.http.put<any>(
      `${environment.baseUrl}medicine/updateStock`,
      data
    );
  }

  userMedicineList() {
    return this.http.get<any>(`${environment.baseUrl}medicine/userMedicine`);
  }
}
