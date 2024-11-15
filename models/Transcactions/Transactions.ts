import Database from '../../database';
import {definition} from '../../database/dbtype';

export class Transactions extends Database {
  protected table: string = 'transactions';
  protected definition: definition = {
    id: 'TEXT PRIMARY KEY NOT NULL',
    gross_amount: 'NUMERIC',
    status: 'INTEGER',
    create_at: 'DATETIME',
  };
}
