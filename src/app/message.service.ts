import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class MessageService {
  public message = new Subject();
  public Behviormessage = new BehaviorSubject('BehaviorInitial');
  public Replymessage = new ReplaySubject(2);
  setMessageSubject(value: string)
  {
this.Replymessage.next("Shyam");
this.Replymessage.next("Pattapu");
this.Replymessage.next("Venky");
this.Replymessage.next("Monkey");


}
}
