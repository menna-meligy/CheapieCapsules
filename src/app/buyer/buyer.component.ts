import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BuyerSellerService } from '../service/buyer-seller.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  giverForm!: FormGroup;
  constructor(
    private giverService: BuyerSellerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.giverForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      quantity: new FormControl(0, Validators.required),
    });
  }
  onSubmit() {
    this.giverService.requestForMedicine(this.giverForm.value).subscribe((res) => {
      this.toastr.success('Request Send Successfully');
      this.giverForm.reset('');
    });
  }
}
