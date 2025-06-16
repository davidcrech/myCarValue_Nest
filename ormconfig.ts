import { DataSource, DataSourceOptions } from 'typeorm';

const dbConfig: DataSourceOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  synchronize: false,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};

export const AppDataSource = new DataSource(dbConfig);
