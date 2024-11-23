// import database from "../../database";
import Database from '../../database';
import {definition} from '../../database/dbtype';

export class Users extends Database<UserCollection, FillableUser> {
  protected table: string = 'users';
  protected definition: definition = {
    id: 'INTEGER PRIMARY KEY ',
    merchant_name: 'TEXT NOT NULL',
  };
}

export type UserCollection = {
  id: string;
  merchant_name: string;
};

export type FillableUser = {
  merchant_name: string;
};

