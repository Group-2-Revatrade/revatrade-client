import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/productService/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:Product[]=[]
  featured:Product[]=[]
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getAllProducts;
  }

  getAllProducts(){
    let j=0;
    this.productService.getAllProduct().subscribe((data)=>{
      this.product=data;
      for(let i=0;i<data.length;i++){
        if(data[i].discount!=null){
          data[i].productPrice=data[i].productPrice*data[i].discountRate;
          this.featured[j]=data[i];
          j++;
        }
      }
    });
  }
  
  addToCart(product:Product){
    console.log("here will add the item to a cart for the orders team");
  }

}
