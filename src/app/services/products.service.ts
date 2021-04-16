import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  host:string = environment.host;

  getAllProducts() : Observable<Product[]> {
   // return this.http.post('http://localhost:8080/user/upload',formData);
    return this.http.get<Product[]>(this.host+'/products');
    
  }

  getSelectedProducts() : Observable<Product[]> {
    // return this.http.post('http://localhost:8080/user/upload',formData);
     return this.http.get<Product[]>(this.host+'/products?selected=true');
     
   }

   getAvailabledProducts() : Observable<Product[]> {
    // return this.http.post('http://localhost:8080/user/upload',formData);
     return this.http.get<Product[]>(this.host+'/products?available=true');
   }

   searchProduct(keyword:string) : Observable<Product[]> {
    // return this.http.post('http://localhost:8080/user/upload',formData);
     return this.http.get<Product[]>(this.host+'/products?name_like='+keyword);
   }

  sendData(data:any) : Observable<any> {

     let headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

   //  return this.http.post('http://localhost:8080/rest/postData2',data,{headers:headers});
     return this.http.post('http://localhost:8080/rest/postData',data);

     
   }


   selectProduct(product:Product) : Observable<Product> {
     product.selected = !product.selected;
     return this.http.put<Product>(this.host+'/products/'+product.id,product);
   }

   deleteProduct(product:Product) : Observable<void> {
    return this.http.delete<void>(this.host+'/products/'+product.id);
  }

   
  
}
