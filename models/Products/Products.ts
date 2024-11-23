import Database from '../../database';
import {definition} from '../../database/dbtype';

export class Products extends Database<ProductCollection, FillableProduct> {
  protected table: string = 'products';
  protected definition: definition = {
    id: 'INTEGER PRIMARY KEY ',
    name: 'TEXT',
    barcode: 'TEXT UNIQUE',
    price: 'NUMERIC',
    image: 'TEXT',
  };
  protected searchable: [string, ...any[]] = ['name', 'price'];
}

export type ProductCollection = {
  id: string;
  name: string;
  barcode: string;
  price: number;
  image: string;
};

export type FillableProduct = {};
