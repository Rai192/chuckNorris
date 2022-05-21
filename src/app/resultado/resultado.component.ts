import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GuardGuard } from '../guard.guard';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  info: any;
  tipo: any;
  solicitud: any;
  tipoCompleto: any;
  listaQuery: any= []
  


  constructor(
    private route: ActivatedRoute,
    private router: Router
    
  ) { }

  ngOnInit(): void {
    this.tipo= this.route.snapshot.paramMap.get('tipo');
    this.solicitud= this.route.snapshot.paramMap.get('solicitud');
    if(this.tipo=="cat"){
      this.tipoCompleto="Categoria"
      this.cargarCategoria(this.solicitud);
    }else if(this.tipo=="text"){
      this.tipoCompleto="Texto/Query"

      this.cargarQuery(this.solicitud);

    }
    
  }

  cargarCategoria(categoriaSeleccionada: string){
    fetch('https://api.chucknorris.io/jokes/random?category='+categoriaSeleccionada)
      .then(async resp=>{
        resp= await resp.json();
        this.info=resp;
        this.info= this.info.value;
      })
  }

  cargarQuery(texto:string){
    let respuesta;
    fetch('https://api.chucknorris.io/jokes/search?query='+texto)
    .then(async resp=>{
      respuesta= await resp.json();
      if(respuesta.status==400){
        this.listaQuery.push("Error con servicio: Demasiados Resultados.")
      }else{
        this.info=respuesta;
        this.info.result.forEach(elemento=>{
          this.listaQuery.push(elemento.value)
        })
        if(this.listaQuery.length==0){
          this.listaQuery.push("No se encontraron resultados.")

        }

      }

    })
  }

  volverAHome(){
    this.router.navigate(['/']);
  }

}
