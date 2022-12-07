import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confiermation',
  templateUrl: './confiermation.component.html',
  styleUrls: ['./confiermation.component.css']
})
export class ConfiermationComponent implements OnInit {

  constructor(
    private dialogRef:MatDialogRef<ConfiermationComponent>
  ) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close('delete')
  }
}
