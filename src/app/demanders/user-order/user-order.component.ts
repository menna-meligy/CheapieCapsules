import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/service/medicine.service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css'],
})
export class UserOrderComponent implements OnInit {
  medicineList: any[] = [];
  constructor(private medicinService: MedicineService) {}

  ngOnInit(): void {
    this.getMedicineList();
  }

  getMedicineList() {
    this.medicinService.userMedicineList().subscribe((res) => {
      console.log(res);
      this.medicineList=res.list
    });
  }
}
