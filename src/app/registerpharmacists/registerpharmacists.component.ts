import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BuyerSellerService } from '../service/buyer-seller.service';
import { MedicineService } from '../service/medicine.service';

@Component({
  selector: 'app-registerpharmacists',
  templateUrl: './registerpharmacists.component.html',
  styleUrls: ['./registerpharmacists.component.css'],
})
export class RegisterpharmacistsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'date', 'stock', 'action'];
  dataSource = [];
  constructor(
    private medicineService: MedicineService,
    private toastr: ToastrService,
    private giverSerivce: BuyerSellerService
  ) {}

  ngOnInit(): void {
    this.getMedicineList();
  }

  getMedicineList() {
    this.giverSerivce.getGiverList().subscribe((res) => {
      console.log(res.resp);
      this.dataSource = res.resp;
    });
  }

  updateStatus(ele: any, status = '') {
    ele.status = status;
    this.giverSerivce.updateGiverStatus(ele).subscribe((res) => {
      this.toastr.success(`Medicine ${status} successfully`);
      this.getMedicineList();
    });
  }
}
