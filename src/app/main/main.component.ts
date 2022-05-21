import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { GuardGuard } from '../guard.guard';
import { ResultadoComponent } from '../resultado/resultado.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  

  categoriasList: any = [];
  categoriaForm: any;
  textoForm: any;
  public buscar:boolean = false;
  tipo: string= "";
  solicitud: any;
  urlDestino: any= "app-resultado/"

  constructor(private router: Router,
    guard: GuardGuard) { 
  }

  ngOnInit(): void {
    this.obtenerListaCat();
    this.categoriaForm= new FormGroup({
      categoriaSelect: new FormControl('')
    })

    this.textoForm= new FormGroup({
      textoIng: new FormControl('', Validators.required),
    })
  }

   async obtenerListaCat(){
      console.log("ENTRA")
      let respuesta;
      fetch('https://api.chucknorris.io/jokes/categories')
      .then(async resp=>{
        respuesta= await resp.json();
        this.categoriasList=respuesta
      })
  
    
  }


  enviarCategoria(){
    let categoriaSeleccionada= this.categoriaForm.get('categoriaSelect').value;
    this.tipo="cat"
    this.buscar=true;

    this.router.navigate([this.urlDestino+"/tipo/"+this.tipo+"/solicitud/"+categoriaSeleccionada]);
    
  }

  enviarTexto(){
    let texto= this.textoForm.get("textoIng").value
    this.tipo="text"
    console.log(texto)
    
    this.buscar=true;

    this.router.navigate([this.urlDestino+"/tipo/"+this.tipo+"/solicitud/"+texto]);
  }

}
