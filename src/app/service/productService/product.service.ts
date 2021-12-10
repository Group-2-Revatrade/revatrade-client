import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAllProduct(){
    return this.httpClient.get<Product[]>("http://localhost:8080/revatrade/products/all")
  }

  searchProduct(term:String){
    return this.httpClient.get<Product[]>("http://localhost:8080/revatrade/products/search?term="+term)
  }
}
