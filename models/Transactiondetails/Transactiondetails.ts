import Database  from "../../database";
import { definition } from "../../database/dbtype";

export class Transactiondetails extends Database{

    protected table: string = 'transaction_details';
    protected definition: definition ={
        id:'TEXT PRIMARY KEY NOT NULL',
        transaction_id:"TEXT",
        product_id:"TEXT",

    };
    
}