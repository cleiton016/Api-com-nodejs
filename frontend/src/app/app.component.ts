import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = '';
  mostrarBarra = true;
  visibleSidebar1;

  barra(){
    if (this.mostrarBarra){
      this.mostrarBarra = false;
    }else{
      this.mostrarBarra = true;
    }
    console.log(this.mostrarBarra)
  }
}
