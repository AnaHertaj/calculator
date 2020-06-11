import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./css/calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  texto: string;
  tecla: any;
  eventSign: boolean;
  eventZero: boolean;
  reset: boolean;
  eventEqual: boolean;

  constructor() { 
    //this.texto = "Veo lo que tecleo";
    this.texto = '';
    this.eventSign = false;
    this.eventZero = false;
    this.reset = true;
    this.eventEqual = false;
  }

  ngOnInit() {
  }

  freset():void{
    this.reset = true;
    this.texto = '';  
  }

  pillarValorTecla($event){
    this.eventSign = false;
    this.reset = false;
    this.eventEqual = true;
    if(this.eventSign === false || this.eventZero === false){
      this.texto = this.texto + $event; 
    } else {
      this.texto = this.texto + '';
    }
 
  }

    pillarValorZero($event){
    if(this.reset === true && this.eventZero === false || this.eventSign === true && this.eventZero === true){
      this.texto = this.texto + '';
    } else if (this.reset === true){
      this.texto = this.texto + '';
    } else if (this.eventSign === true){
      this.texto = this.texto + '';
    } else {
      this.texto = this.texto + $event; 
      this.eventZero = true;
    }
  }

  pillarValorSign($event){
    if(this.reset === true){
      this.texto = this.texto + '';  
    }
    else if(this.eventSign === false){
      this.texto = this.texto + $event;  
      this.eventSign = true;
    } else {
      this.texto = this.texto + ''; 
      this.eventZero = true; 
    }
  }

  calcular():void{ 
    if(this.eventEqual === false){
      this.texto = this.texto + '';
    } else if(this.eventSign === false){
         this.texto = eval(this.texto);  
       } else {
         this.texto = this.texto + '';
      }
  }
}

/// de momento lo he configurado para que el 0 sólo se pueda escribir detrás de una tecla número 
// esta calculadora podría seguir desarrollándose y desarollándose :) 
