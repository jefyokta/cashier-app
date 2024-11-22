export type definition = {
  id: 'INTEGER PRIMARY KEY ';
  [key: string]: any;
};

type Searchable = string[];

export interface Collection{

  id:string
}

export interface Fillable {
  [key:string,value:any]
}