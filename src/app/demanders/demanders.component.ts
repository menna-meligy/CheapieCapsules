import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BuyerSellerService } from '../service/buyer-seller.service';
import { MedicineService } from '../service/medicine.service';

@Component({
  selector: 'app-demanders',
  templateUrl: './demanders.component.html',
  styleUrls: ['./demanders.component.css'],
})
export class DemandersComponent implements OnInit {
  displayedColumns: string[] = ['name',  'stock', 'action'];
  dataSource = [];
  quantity: number[] = [];
  constructor(
    private medicineService: MedicineService,
    private toastr: ToastrService,
    private buyerService:BuyerSellerService
  ) {}

  ngOnInit(): void {
    this.getMedicineList();
  }

  getMedicineList() {
    this.buyerService.getBuyerList().subscribe(res=>{
      this.dataSource = res.resp;
    })
  }




  buyMedicine(item: any,status='') {
    item.status=status
    this.buyerService.updateBuyerStatus(item).subscribe((res) => {
      console.log(res);
      this.toastr.success('Medicine Status Updated Successfully');
      this.getMedicineList();
    });
  }
}
