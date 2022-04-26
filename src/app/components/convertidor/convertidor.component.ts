import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  
  cantidad=0;
  tengo ='USD';
  quiero='EUR';
  total =0;

  monedas: string[]= ['USD','EUR','LIBRA'];
  constructor() { }

  ngOnInit(): void {
  }

  convertir (){
    console.log('1');
    switch(this.tengo){ 
      case 'USD':
      if(this.quiero==='USD'){
        this.total=this.cantidad
      }
      if(this.quiero==='EUR'){
        this.total=this.cantidad*.93 
      }
      if(this.quiero==='LIBRA'){
        this.total=this.cantidad*.78
      }
      break;
      case 'EUR':
        if(this.quiero==='USD'){
          this.total=this.cantidad*1.08
        }
        if(this.quiero==='EUR'){
          this.total=this.cantidad
        }
        if(this.quiero==='LIBRA'){
          this.total=this.cantidad*.84
        }
      break;
      case 'LIBRA':
        if(this.quiero==='USD'){
          this.total=this.cantidad*1.29
        }
        if(this.quiero==='EUR'){
          this.total=this.cantidad*1.19
        }
        if(this.quiero==='LIBRA'){
          this.total=this.cantidad
        }
      break;

    }
  }
}
