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
  restauran2: Restaurant = {
    name: 'Buen Sabor',
    distrite: 'San Borja',
    urlImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/67/20/ce/caption.jpg?w=600&h=-1&s=1',
    rating: 4,
    sales: false,
    description: 'Es un buen restaurante con rica comida excelente ambiente',
  };
  restaurant3: Restaurant = {
    name: 'RestaurantBuen Gusto',
    distrite: 'San Isidro',
    urlImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSt4YDaCXAvzdsR6HpShp_qSrlX99AJssX3g&usqp=CAU',
    rating: 3,
    sales: false,
    description: 'Es un buen restaurante con rica comida excelente ambiente',
  };
  restauran4: Restaurant = {
    name: 'Restaurante Buen Gusto',
    distrite: 'Miraflores',
    urlImage:
      'https://limabywalking.com/blog/wp-content/uploads/2019/07/javier-restaurante-barranco.jpg',
    rating: 5,
    sales: false,
    description: 'Es un buen restaurante con rica comida excelente ambiente',
  };
  restauran5: Restaurant = {
    name: 'Restaurante Buen Gusto',
    distrite: 'San Borja',
    urlImage:
      'https://media.admagazine.com/photos/651aeed9da5f4d9a3844a94b/16:9/w_1920,c_limit/Porten%CC%83o-restaurante-1.jpg',
    rating: 4,
    sales: true,
    description: 'Es un buen restaurante con rica comida excelente ambiente',
  };
  restauran6: Restaurant = {
    name: 'Restaurante Buen Gusto',
    distrite: 'Miraflores',
    urlImage:
      'https://hips.hearstapps.com/hmg-prod/images/elle-restaurantes-decoracion-bonita-instagram-raimunda-madrid-1573068471.jpg?crop=0.9333333333333333xw:1xh;center,top&resize=1200:*',
    rating: 2,
    sales: false,
    description: 'Es un buen restaurante con rica comida excelente ambiente',
  };

  listRestaurants = [
    this.restaurant,
    this.restauran2,
    this.restaurant3,
    this.restauran4,
    this.restauran5,
    this.restauran6,
  ];

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
    this.filterRestaurantsByLocation();
    this.filterRestaurantsBySale();
    this.filterRestaurantsByBestOffers();
  }
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
  }
}
