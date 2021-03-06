import { Injectable , Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../app.config';
import { Headers, Http, Response } from '@angular/http';
import { AppService } from '../services/app.service';
import 'rxjs/Rx';

@Injectable()
export class OrdersService {

  constructor(@Inject(APP_CONFIG) private config: AppConfig, private http: Http, private appService: AppService) { }

 getOrders(id: string){
    const headers = new Headers({ 'Authorization': this.appService.token});
    return this.http.get(this.config.apiEndpoint + 'users/' + id + '/orders?with=provider', {headers: headers})
      .map((response: Response) => response.json());
  }

  getOrder(id: string){
    const headers = new Headers({ 'Authorization': this.appService.token});
    return this.http.get(this.config.apiEndpoint + 'orders/' + id, {headers: headers})
      .map((response: Response) => response.json());
  }

  addOrder(order: any){
    const body = JSON.stringify(order);
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.appService.token});
    return this.http.post(this.config.apiEndpoint + 'orders/', body, {headers: headers})
      .map((response: Response) => response.json());
  }

  getOrderItems(id: string){
    const headers = new Headers({ 'Authorization': this.appService.token});
    return this.http.get(this.config.apiEndpoint + 'orders/' + id + '/items', {headers: headers})
      .map((response: Response) => response.json());
  }

   finishOrder(id: string){
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.appService.token});
    return this.http.post(this.config.apiEndpoint + 'orders/' + id + '/checkout', {}, {headers: headers})
      .map((response: Response) => response.json());
  }

 cancelOrder(id: string){
    const body = JSON.stringify({id});
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.appService.token});
    return this.http.put(this.config.apiEndpoint + 'orders/' + id + '/cancel', {headers: headers})
      .map((response: Response) => response.json());
  }

//need item route from service
   addItem(id: string, item: any){
    const body = JSON.stringify(item);
    console.log('add item body');
    console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.appService.token});
    return this.http.post(this.config.apiEndpoint + 'orders/' + id + '/add_item', body, {headers: headers})
      .map((response: Response) => response.json());
  }

//need item delete route from service
   removeItem(orderID: string, itemID: string){
    const item = {'item': itemID};
    console.log(item);
    const body = JSON.stringify(item);
     console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.appService.token});
    return this.http.post(this.config.apiEndpoint + 'orders/' + orderID + '/remove_item', body, {headers: headers})
      .map((response: Response) => response.json());
  }


  latestOrders(id: string){
    const headers = new Headers({ 'Authorization': this.appService.token});
    return this.http.get(this.config.apiEndpoint + 'orders/?limit=3', {headers: headers})
      .map((response: Response) => response.json());
  }

  deleteOrder(id: string){
    const headers = new Headers({ 'Authorization': this.appService.token});
    return this.http.delete(this.config.apiEndpoint + 'orders/' + id, {headers: headers})
      .map((response: Response) => response.json());
  }

  leaveOrder(id: string){
    const headers = new Headers({ 'Authorization': this.appService.token});
    return this.http.post(this.config.apiEndpoint + 'orders/' + id + '/leave', {}, {headers: headers})
      .map((response: Response) => response.json());
  }
  acceptInvitation(link){
    const headers = new Headers({ 'Authorization': this.appService.token});
    return this.http.post(this.config.apiEndpoint + 'orders/' + link + '/join', {}, {headers: headers})
      .map((response: Response) => response.json());
  }
  refuseInvitation(link){
    const headers = new Headers({ 'Authorization': this.appService.token});
    return this.http.post(this.config.apiEndpoint + 'orders/' + link + '/cancel', {}, {headers: headers})
      .map((response: Response) => response.json());
  }

}
