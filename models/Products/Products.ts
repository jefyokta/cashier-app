import Database from '../../database';
import {definition} from '../../database/dbtype';

export class Products extends Database {
  protected table: string = 'products';
  protected definition: definition = {
    id: 'TEXT PRIMARY KEY NOT NULL',
    name: 'TEXT',
    price: 'NUMERIC',
    image: 'TEXT',
  };
  protected searchable: [string, ...any[]] = ['name', 'price'];

}
