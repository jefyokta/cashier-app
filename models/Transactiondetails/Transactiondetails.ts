import Database  from "../../database";
import { definition } from "../../database/dbtype";

export class Transactiondetails extends Database<
  TransactiondetailCollection,
  FillableTransactionDetails
> {
  protected table: string = 'transaction_details';
  protected definition: definition = {
    id: 'INTEGER PRIMARY KEY ',
    transaction_id: 'TEXT',
    product_id: 'TEXT',
  };
}


export type TransactiondetailCollection= {
    id: string,
    transaction_id:string,
    product_id:string

}

export type FillableTransactionDetails = {
    
}