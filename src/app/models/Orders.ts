import {Product} from "./Product";

export class Orders{
  constructor(public orderDetailsId:number, public userId:number, public orderPrice:number, public orderQuantity:number,
              public discount:boolean, public productId:number, public productName:String, public discountRate:number,
              public description:string, public productPic:string, public orderTotal:number){

    this.orderDetailsId = orderDetailsId;
    this.userId = userId;
    this.orderPrice=orderPrice;
    this.orderQuantity=orderQuantity;
    this.productId=productId;
    this.productName=productName;
    this.discount=discount;
    this.discountRate=discountRate;
    this.description=description;
    this.productPic=productPic;
    this.orderTotal =orderTotal;
  }




}
