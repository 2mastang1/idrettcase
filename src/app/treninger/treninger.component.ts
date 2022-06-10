import { Component, ElementRef, Input, ViewChild,} from '@angular/core';
import { MatDialog,} from '@angular/material/dialog';
import { TreningerInfoComponent } from '../treninger-info/treninger-info.component';

@Component({
  selector: 'app-treninger',
  templateUrl: './treninger.component.html',
  styleUrls: ['./treninger.component.css'],
})

export class TreningerComponent {

//her er listen over objekt som jeg bruker til å iterere over
  trening:{id: number, hvor: string, info: string, img: string}[] = [
    {id: 1, hvor: 'Træffhuset', info:'hello verden', img:'https://www.molde.kommune.no/handlers/bv.ashx/i2b07b822-66fe-44fc-b8c2-489ca253fedf/w1920/h1080/q1322/k14ab8e58db7a/20210716_135536.jpg'},
    {id: 2, hvor: 'Eidsvåg kunstgressbane', info:'hello verden 2', img:'https://www.molde.kommune.no/handlers/bv.ashx/i2304f203-d115-45f4-85ce-19db726db8ec/w1920/h1080/q240/k84aa8d327645/kunstgrasbanen-21-09-206-3.jpg'},
    {id: 3, hvor: 'Orkdal', info:'hello verden 3', img:'https://www.orkdal-il.no/assets/Album/g11-molde-cup-26-september-2015/IMG-8731.jpg'},
  ];
//her er enda en variabel med en verdi av en komponent som brukes til å definere hva som skal åpnes i dialog boksen
  constructor(private dialog: MatDialog) {}



//variabelene nedenfor er brukt til å lage et objekt som blir pushet inn i trening
  stringId: any;
  id: any;
  hvor = "";
  info = "";
  img = "";
  treningObject: {id: number, hvor: string, info: string, img: string} = {id: 0, hvor:"", info:"", img:""}

openDialog() {
  this.dialog.open(TreningerInfoComponent, {
    data: this.trening
    
  })
  
}

//funksjon for å lage et objekt og pushe det inn i trening
userLogin() {
  this.img = ((<HTMLInputElement>document.getElementById("image")).value);
  this.hvor = ((<HTMLInputElement>document.getElementById("hvor")).value);
  this.info = ((<HTMLInputElement>document.getElementById("info")).value);
  this.id = this.trening.length +1
  this.treningObject = {id: this.id, hvor: this.hvor, info: this.info, img: this.img}
  console.log(this.treningObject)
  this.trening.push(this.treningObject)
  console.log(this.trening)
};


    
  

}




