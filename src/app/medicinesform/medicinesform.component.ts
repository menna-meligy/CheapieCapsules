import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MedicineModel } from './medicine-dash board.model';
import { ApiService } from '../shared/api.service';
import { MedicineService } from '../service/medicine.service';
import { ToastrService } from 'ngx-toastr';
import { PageEvent } from '@angular/material/paginator';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfiermationComponent } from '../confiermation/confiermation.component';

@Component({
  selector: 'app-medicinesform',
  templateUrl: './medicinesform.component.html',
  styleUrls: ['./medicinesform.component.css'],
})
export class MedicinesformComponent implements OnInit {
  formValue!: FormGroup;
  id: any = '';
  filter = {
    skip: 0,
    limit: 5,
    search: '',
  };
  paginationObj = {
    totalCount: 0,
    skip: 0,
    conunt: 0,
  };
  role = '';
  medicineModelObj: MedicineModel = new MedicineModel();
  displayedColumns: string[] = ['name', 'date', 'price', 'dosage', 'action'];
  dataSource = [];
  constructor(
    private formbuilder: FormBuilder,
    private medicineService: MedicineService,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {
    // setTimeout(() => {
    //   this.role = this.authService.getRole();
    //   console.log(this.role);

    //   if (this.role === 'demander') {
    //     this.router.navigate(['/demanders']);
    //   } else if (this.role === 'pharmacist') {
    //     this.router.navigate(['/registerpharmacists']);
    //   }
    // }, 200);
  }

  ngOnInit(): void {
    this.getMedicine();
  }

  getMedicine() {
    this.medicineService.getMedicine(this.filter).subscribe((res) => {
      this.dataSource = res.resp;
      this.paginationObj.totalCount = res.totalCount;
    });
  }

  onMedicineSearch() {
    this.getMedicine();
  }

  onPageChange(event: PageEvent) {
    console.log(event);
    this.filter.skip = event.pageIndex * 5;
    this.getMedicine();
  }

  deleteMedicine(id: any) {
    const dialogRef = this.dialog.open(ConfiermationComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);

      if (res) {
        this.medicineService.deleteMedicine(id).subscribe((res) => {
          this.toastr.success('Medicine Delete Successfully');
          this.getMedicine();
        });
      }
    });
  }

  updateMedicine(data: any) {
    this.id = data._id;
    this.medicineModelObj = data;
    console.log(this.medicineModelObj);

    document.getElementById('add_modal')?.click();
  }

  postMedicineDetails() {
    if (!this.id) {
      this.medicineService.addMedicine(this.medicineModelObj).subscribe(
        (res) => {
          this.toastr.success(res.message);
          document.getElementById('modal')?.click();
          this.medicineModelObj = new MedicineModel();
          this.getMedicine();
        },
        (err) => {
          document.getElementById('modal')?.click();
          this.toastr.error(err.error.message);
        }
      );
    } else {
      this.medicineService
        .updateMedicine(this.id, this.medicineModelObj)
        .subscribe(
          (res) => {
            this.toastr.success(res.message);
            this.getMedicine();
            document.getElementById('modal')?.click();
          },
          (err) => {
            document.getElementById('modal')?.click();
            this.toastr.error(err.error.message);
          }
        );
    }
  }
}
