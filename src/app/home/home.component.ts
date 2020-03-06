import { MessageService } from './../message.service';
import { Component} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public MessageService: MessageService) { }

  setMessage(event)
  {
    //console.log(event.value);
//this.MessageService.setMessageSubject(event.value);
//this.MessageService.message.next(event.value);

this.MessageService.Replymessage.subscribe(msg=>{
  console.log('From 2nd sub:', msg);
  })

}
}


