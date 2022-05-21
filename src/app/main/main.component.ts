import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
    guard: GuardGuard,
    private route: ActivatedRoute) { 
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
     this.buscar=true;
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
    if(categoriaSeleccionada!=""){
      this.buscar=true;
      this.tipo="cat"
      this.router.navigate([this.urlDestino+"/tipo/"+this.tipo+"/solicitud/"+categoriaSeleccionada]);

    }else{
      console.log("entra el else ")
      this.router.navigate([this.urlDestino])
    }

    
  }

  enviarTexto(){
    let texto= this.textoForm.get("textoIng").value
    if(texto!=""){
      this.tipo="text"
      console.log(texto)
      this.buscar=true;
      this.router.navigate([this.urlDestino+"/tipo/"+this.tipo+"/solicitud/"+texto]);
    
    }else{
      this.router.navigate([this.urlDestino])

    }
    

  }

}
