import { Component, Inject, OnInit,  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { TreningerComponent } from '../treninger/treninger.component';


@Component({
  selector: 'app-treninger-info',
  templateUrl: './treninger-info.component.html',
  styleUrls: ['./treninger-info.component.css']
})


export class TreningerInfoComponent implements OnInit {

//importerer listen med objekt fra treninger-component
  constructor(@Inject(MAT_DIALOG_DATA) public data: TreningerComponent["trening"]) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
