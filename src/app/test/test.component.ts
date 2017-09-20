import { Component, OnInit } from '@angular/core';
import { MakeService } from "../_services/index";
import { Make } from "../_models/make";
import { BehaviorSubject } from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId:module.id,
  selector: 'test-user',
  template: `<form>
o/p{{ condition }}
    <div id="mylist" class="w3-container w3-light-grey w3-padding-16">
        <button (click)='addItem(item.value);'>ADD ITEM</button>
        <input type="text" [(ngModel)]=newItem #item name='item'>
        <ul class="w3-ul">
           <li class="w3-padding-16" *ngFor = 'let item of list'>{{item}} <button class="btn w3-right w3-margin-right" (click)='deleteItem(item)'>x</button></li>
  </ul>
  </div>
<button type="button" class="btn btn-primary"
      (click)="height = height ? 0 : my.scrollHeight">Toggle collapse
    </button>
<div id="demo" class="block" [style.height]="height + 'px'" #my>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
<select id="state" name="state"
        [(ngModel)]="stateId"    
        (change)="onChange($event.target.id, $event.target.value, my.scrollHeight)"
        class="form-control">
        <option *ngFor="let r of statesList"
            value="{{ r.id }}">{{ r.name }}
        </option>
</select>
  </form>`,
  styles: [`
    .block {
      overflow: hidden;
      -webkit-transition: height .5s;
      transition: height .5s;
    }
  `]
})

 export class TestComponent implements OnInit {
    list:string[];
    stateId: number;
    newItem: string
    statesList: Make[];
    constructor(private makeService: MakeService) { }
    isOpen: boolean;
    height = 0;
    condition: boolean; // = eval('1<2');
    count$: Observable<number>;
  ngOnInit() {
      this.list = [];
      this.statesList = JSON.parse('[{"id":1,"name":"Honda","detail":null,"isActive":false},{"id":2,"name":"Hero","detail":null,"isActive":false},{"id":3,"name":"Bajaj","detail":null,"isActive":false},{"id":4,"name":"Royal Enfield","detail":null,"isActive":false}]');
      this.count$ = Observable.of(10);
  }

  addItem(item: any) {
      this.list.unshift(item);
      this.newItem = '';
     return false;
  }

  deleteItem(item: any){
    for(let i = 0; i<this.list.length; i ++){
      if(this.list[i] == item ){
        this.list.splice(i, 1);
      } 
    }
  }

  onChange(id: string, deviceValue: string, height: number) {
      if (id == 'state') {
          if (deviceValue == '1') {
              //expend the panel...
              this.isOpen = true;
              this.height = height;
          }
          else {
              //collapse the panel...
              this.isOpen = false;
              this.height = 0;
          }
      }
  }
}