import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TreningerInfoComponent } from './treninger-info/treninger-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'idrettcase';
//her oppretter jeg en variabel med verdien av en komponent
// og bruker den til å definere hva som skal åpne inne i dialog boksen
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(TreningerInfoComponent)
  }
}
