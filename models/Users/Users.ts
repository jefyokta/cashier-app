// import database from "../../database";
import Database from '../../database';
import {definition} from '../../database/dbtype';

export class Users extends Database {
  protected table: string = 'users';
  protected definition: definition = {
    id: 'TEXT PRIMARY KEY NOT NULL',
    username: 'TEXT UNIQUE NOT NULL',
    name: 'TEXT NOT NULL',
    password: 'TEXT NOT NULL',
    merchantname:"TEXT NOT NULL"
  };
}
