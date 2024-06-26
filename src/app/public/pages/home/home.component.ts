import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../restaurant/Restaurant';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
} from '@angular/material/tree';
import {AuthenticationService} from "../../../iam/services/authentication.service";
import {RestaurantModel} from "../../../iam/model/restaurant.model";

interface FoodNode {
  name: string;
  children?: FoodNode[];
}
const TREE_DATA: FoodNode[] = [
  {
    name: 'Categorias',
    children: [{ name: 'Sushi' }, { name: 'Marino' }, { name: 'Postes' }, { name: 'Criollo' }],
  },
  {
    name: 'Opción en linea',
    children: [{ name: 'Pedidos en linea' }, { name: 'Reserva en linea' }],
  },
  {
    name: 'Distritos',
    children: [
      { name: 'San Isidro' },
      { name: 'San Borja' },
      { name: 'Pueblo Libre' },
      { name: 'Lince' },
      { name: 'Jesus María' },
      { name: 'Los olivos' },
    ],
  },
];
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  restaurant: Restaurant = {
    name: 'Buen Gusto',
    distrite: 'San Borja',
    urlImage:
      'https://media.admagazine.com/photos/651aeed9da5f4d9a3844a94b/16:9/w_1920,c_limit/Porten%CC%83o-restaurante-1.jpg',
    rating: 5,
    sales: true,
    description: 'Es un buen restaurante con rica comida excelente ambiente',
  };

  restaurantList: RestaurantModel[] = [];

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.dataSource.data = TREE_DATA;
  }
  filterRestaurants: any;
  bestRestaurantsDistrite: any;
  salesRestaurant: any;





  logout() {
    this.authenticationService.signOut();
    this.router.navigate(['/login']);
  }


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  ngOnInit(): void {
    console.log('probando');

    this.authenticationService.GetAllRestaurants().subscribe(restaurants=>{
      console.log(restaurants);
      this.restaurantList = restaurants;
    });

    //this.filterRestaurantsByLocation();
    //this.filterRestaurantsBySale();
    //this.filterRestaurantsByBestOffers();
  }

  viewMore(restaurantName: string, restaurantId: number) {
    this.router.navigate(['/restaurant-detail', restaurantId, restaurantName]);
  }


  /*
  searchForm: any = '';
  filterRestaurantsByLocation() {
    this.filterRestaurants = this.listRestaurants.filter(
      (restaurant: any) => restaurant.distrite == 'San Borja'
    );
  }





  filterRestaurantsByBestOffers() {
    this.bestRestaurantsDistrite = this.listRestaurants.filter(
      (restaurant) =>
        restaurant.distrite == 'San Borja' && restaurant.rating >= 4
    );
  }
  filterRestaurantsBySale() {
    this.salesRestaurant = this.listRestaurants.filter(
      (restaurant) => restaurant.sales
    );
  }*/


}
