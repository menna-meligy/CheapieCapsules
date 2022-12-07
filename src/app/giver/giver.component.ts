import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BuyerSellerService } from '../service/buyer-seller.service';

@Component({
  selector: 'app-giver',
  templateUrl: './giver.component.html',
  styleUrls: ['./giver.component.css'],
})
export class GiverComponent implements OnInit {
  giverForm!: FormGroup;
  constructor(
    private giverService: BuyerSellerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.giverForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      quantity: new FormControl(0, Validators.required),
      expirationdate: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    this.giverService.giveMedicine(this.giverForm.value).subscribe((res) => {
      this.toastr.success('Request Send Successfully');
      this.giverForm.reset('');
    });
  }
}
