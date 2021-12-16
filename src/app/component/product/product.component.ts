import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/productService/product.service';
import { JwtTestService } from 'src/app/service/jwtTest.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	product:Product[]=[]
	featured:Product[]=[]
	term:String ="";
	constructor(private productService:ProductService, private cartService: CartService, private jwtTestService: JwtTestService) { }
	
	ngOnInit(): void {
		this.getAllProducts();
	}

	jwtTest(){
		this.jwtTestService.jwtTest().subscribe(
			(data) => {
				console.log("ProductComponent > jwtTest() > data: ", data);
			}
		)
	}

	getAllProducts(){
		let j=0;
		
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
		
	}
	
	addToCart(product:Product){
		//prints aout the quanity they want rn to add to the cart
		let inCart: boolean = false;
		let cartItems: Product[] = this.cartService.cart;
		for(let index: number = 0; index < cartItems.length; index++) {
			if(product.productId == cartItems[index].productId) {
				cartItems[index].amount = product.amount;
				inCart = true;
			}
		}
		if(inCart == false && product.amount <= product.productQuantity) {
			this.cartService.cart.push(product);
			sessionStorage.setItem('cart', JSON.stringify(this.cartService.cart));
			console.log(JSON.parse(sessionStorage.cart));
		}

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




