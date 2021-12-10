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
  term:String ="";
  constructor(private productService:ProductService) { }
  
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    let j=0;
    console.log("what")
    this.productService.getAllProduct().subscribe((data)=>{
      this.product=data;
      for(let i=0;i<data.length;i++){
        if(data[i].discount==true){
          data[i].productPrice=roundTo(data[i].productPrice*(1-data[i].discountRate/100),2);
          this.featured[j]=data[i];
          this.product[i]=data[i];
          j++;
        }
      }
    });
    console.log("got products");
  }
  
  addToCart(product:Product){
    //prints aout the quanity they want rn to add to the cart
    console.log(product.amount)
  }

  searchProduct(term:String){
    if(term!=null){
      this.productService.searchProduct(term).subscribe((data)=>{
        this.product=data;
        for(let i=0;i<data.length;i++){
          if(data[i].discount==true){
            data[i].productPrice=roundTo(data[i].productPrice*(1-data[i].discountRate/100),2);
            this.product[i]=data[i];
          }
        }
      })
    }
  }
}
const roundTo = function(num: number, places: number) {
  const factor = 10 ** places;
  return Math.round(num * factor) / factor;
};



