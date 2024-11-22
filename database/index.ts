import SQLite, {ResultSet, Transaction} from 'react-native-sqlite-storage';
import {Collection, definition, Fillable, Searchable} from './dbtype';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

export default abstract class Database<
  T extends Collection,
  X extends Fillable,
> {
  protected db: SQLite.SQLiteDatabase | null = null;
  protected table: string = '';
  protected sql: string = '';
  protected params: any[] = [];
  protected searchable: Searchable = ['name', 'id'];
  protected definition: definition = {id: 'INTEGER PRIMARY KEY '};

  constructor() {
    this.init();
  }

  protected async openDatabase(): Promise<SQLite.SQLiteDatabase> {
    if (this.db === null) {
      this.db = await SQLite.openDatabase({
        name: 'oktaax_cashier',
        location: 'default',
      });
    }
    return this.db;
  }

  public async closeDatabase(): Promise<void> {
    if (this.db !== null) {
      await this.db.close();
      this.db = null;
    }
  }

  public async raw(sql: string): Promise<void> {
    this.sql = sql;
    await this.query();
  }

  protected async query(): Promise<ResultSet[]> {
    const db = await this.openDatabase();
    try {
      const res = await db.executeSql(this.sql, this.params);
      this.resetQuery();
      return res;
    } catch (error) {
      console.error('Query Error:', error);
      this.resetQuery();
      throw error;
    }
  }

  protected resetQuery(): void {
    this.sql = '';
    this.params = [];
  }

  public async first(): Promise<T | null> {
    const [result] = await this.get();
    return result || null;
  }

  public select(column: string): this {
    this.sql = `SELECT ${column} FROM ${this.table}`;
    return this;
  }

  public where(condition: string, params: any[]): this {
    this.sql += ` WHERE ${condition}`;
    this.params = params;
    return this;
  }

  public async insert(Fillable: X): Promise<ResultSet[]> {
    const columns = Object.keys(Fillable);
    const columnsStr = columns.join(', ');
    const valuesPlaceholder = columns.map(() => '?').join(', ');

    const values = Object.values(Fillable);

    this.sql = `INSERT INTO ${this.table} (${columnsStr}) VALUES (${valuesPlaceholder})`;
    this.params = values;
    const result = await this.query();
    return result;
  }

  public async get(): Promise<T[]> {
    const result = await this.query();
    const rows = result[0].rows;
    const data: T[] = [];
    for (let i = 0; i < rows.length; i++) {
      data.push(rows.item(i));
    }
    return data;
  }
  public async search(q: string): Promise<T[] | undefined> {
    const search = this.searchable.map(item => `LIKE ? `).join(' OR ');
    this.params = this.searchable.map(item => `%${q}%`);
    this.sql = `SELECT * FROM ${this.table} WHERE ${search}`;

    const data: T[] = [];
    const result = await this.query();
    const rows = result[0].rows;
    for (let i = 0; i < rows.length; i++) {
      data.push(rows.item(i));
    }

    return data;
  }

  public async isEmpty(): Promise<boolean> {
    this.sql = `SELECT * FROM ${this.table} LIMIT 1`;
    const result = await this.query();
    return result[0].rows.length === 0;
  }

  public join(table: string, compare: string): this {
    this.sql += ` INNER JOIN ${table} ON ${compare}`;
    return this;
  }

  public async isMyQueryEmpty(): Promise<boolean> {
    const result = await this.query();
    return result[0].rows.length === 0;
  }

  protected async init(): Promise<void> {
    try {
      const db = await this.openDatabase();
      const columnDefinitions = Object.entries(this.definition)
        .map(([key, value]) => `${key} ${value}`)
        .join(', ');

      await db.transaction(async (tx: Transaction) => {
        await tx.executeSql(
          `CREATE TABLE IF NOT EXISTS ${this.table} (${columnDefinitions});`,
        );
      });
    } catch (error) {
      console.error('Init Error:', error);
      throw error;
    }
  }

  public async migrate(): Promise<void> {
    try {
      const db = await this.openDatabase();
      await db.executeSql(`DROP TABLE IF EXISTS ${this.table};`);
      await this.init();
    } catch (error) {
      console.error('Migration Error:', error);
      throw error;
    }
  }
}
