import { MessageService } from './message.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: any;
 // subscription: Subscription;
 // mySub2:Subscription;
  xy:any;

  constructor(public MessageService: MessageService){}
ngOnInit()
{
  console.log('From 2nd sub:');
this.MessageService.Replymessage.subscribe(msg=>{
  console.log('From 2nd sub:', msg);
});

}

 

  
  ngOnDestroy()
  {
   // this.subscription.unsubscribe();
    
  }

}
