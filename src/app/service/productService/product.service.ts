import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { UtilService } from '../util.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient, private utilService: UtilService) { }

  getAllProduct(){
    return this.httpClient.get<Product[]>(`${this.utilService.getServerDomain()}/revatrade/products/all`)
  }

  searchProduct(term:String){
    return this.httpClient.get<Product[]>(`${this.utilService.getServerDomain()}/revatrade/products/search?term=${term}`)
  }
}
