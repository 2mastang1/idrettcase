import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-treninger-info',
  templateUrl: './treninger-info.component.html',
  styleUrls: ['./treninger-info.component.css']
})
export class TreningerInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TreningerInfoComponent>) { }

  ngOnInit(): void {
  }

}
