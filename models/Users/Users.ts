// import database from "../../database";
import Database from '../../database';
import {definition} from '../../database/dbtype';

export class Users extends Database<User,FillableUser> {
  protected table: string = 'users';
  protected definition: definition = {
    id: 'INTEGER PRIMARY KEY ',
    username: 'TEXT UNIQUE NOT NULL',
    name: 'TEXT NOT NULL',
    password: 'TEXT NOT NULL',
    merchant_name: 'TEXT NOT NULL',
  };
}

export type User = {
  id: string;
  username: string;
  name: string;
  password: string;
  merchant_name: string;
};

export type FillableUser = {
  username: string;
  name: string;
  password: string;
  merchant_name: string;
};
