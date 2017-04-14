import { Component, OnInit,EventEmitter } from '@angular/core';
import { OrdersService } from '../services/orders.service'
import { FriendsService } from '../services/friends.service'
import { AppService } from '../services/app.service'
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [ OrdersService, FriendsService ]
})
export class OrdersComponent implements OnInit {

  public orders: any = {};
  public friends: any = [];

  constructor(private appService: AppService, private ordersService: OrdersService, private friendsService: FriendsService) { }

   ngOnInit() {
     this.getOrders();
     this.getFriends();
   }

  getOrders(){
     this.ordersService.getOrders(this.appService.user._id).subscribe(
       (data: any) => { this.orders = data; console.log(this.orders); },
      (error: any) => { }
    );
  }

  getFriends(){
    this.friendsService.getAll(this.appService.user._id).subscribe(
      (data) => { this.friends = data; console.log(this.friends); },
      (error) => {console.log(error);}
    )
  }

  getFriendName(id){
    return this.friends.filter((friend) => {
      return friend._id == id;
    })
  }

   finishOrder(event:any){
    var target = event.target ;
    var idAttr = target.attributes.id;
    var order_id = idAttr.nodeValue;
    console.log(order_id)
    this.ordersService.finishOrder(order_id).subscribe(
    (data: any) => { this.getOrders(); console.log(this.orders); },
      (error: any) => { },
      () => { }
     );
     console.log(order_id)
   }

   cancelOrder(event:any){
    var target = event.target ;
    var idAttr = target.attributes.id;
    var order_id = idAttr.nodeValue;
    this.ordersService.cancelOrder(order_id).subscribe(
    (data: any) => { this.getOrders(); console.log(this.orders); },
      (error: any) => { },
      () => { }
     );
     console.log(order_id)
   }


 }
