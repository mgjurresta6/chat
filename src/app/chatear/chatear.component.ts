import { Component } from '@angular/core';

@Component({
  selector: 'app-chatear',
  templateUrl: './chatear.component.html',
  styleUrls: ['./chatear.component.scss']
})
export class ChatearComponent {
nuevoMensaje: String ='';
constructor(){

}
ngOnInit(): void {

}
enviarMensaje(){
  console.log(this.nuevoMensaje);
  this.nuevoMensaje = "";
}
}
