import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productListTitle:string='Products List';
  _listFilter:string=''

  constructor() { 
    this._listFilter=""
    this.productsList=this.products;
  }

  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    this.productsList=this._listFilter ? this.doProductFiltering(this._listFilter):this.products;
  }
  
  productsList:Product[];
  products:Product[]=[{
    "productId": 1,
    "productname": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19,2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2
  },
  {
    "productId": 2,
    "productname": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18,2016",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2
  },
  {
    "productId": 5,
    "productname": "hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21,2016",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8
  },
  {
    "productId": 8,
    "productname": "Saw",
    "productCode": "TBX-0022",
    "releaseDate": "May 15,2016",
    "description": "Curved claw steel hammer",
    "price": 11.55,
    "starRating": 3.7
  }
]

  ngOnInit() {
  }

  doProductFiltering(filterBy:string):Product[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter(product=> product.productname.toLowerCase().indexOf(filterBy)!==-1);
  }
}
