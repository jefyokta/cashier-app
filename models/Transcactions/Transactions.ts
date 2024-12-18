import Database from '../../database';
import {definition} from '../../database/dbtype';

export class Transactions extends Database<TransactionCollection, FillableTransaction> {
  protected table: string = 'transactions';
  protected definition: definition = {
    id: 'INTEGER PRIMARY KEY ',
    gross_amount: 'NUMERIC',
    status: 'INTEGER',
    created_at: 'DATETIME',
  };
}

export type TransactionCollection = {
  id: string;
  gross_amount: number;
  status: number;
  created_at: string;
};

export type FillableTransaction={

}
