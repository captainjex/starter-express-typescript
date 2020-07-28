/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const moment = require('moment');
const { exit } = require('process');

const migrationSkeleton = `import { QueryInterface, DataTypes } from 'sequelize';

/**
 * function that sequelize-cli runs if you want to add this migration to your database
 * */
export async function up(query: QueryInterface): Promise<void> {
}

/**
 * function that sequelize-cli runs if you want to remove this migration from your database
 * */
export async function down(query: QueryInterface): Promise<void> {
}
`;

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('[ERROR] You must provide migration name as parameter');
  exit(1);
}
if (args.length > 1) {
  console.error('[ERROR] Migration name must not have spaces');
  exit(1);
}
const migrationName = [args];
const timestamp = moment().utc().format('YYYYMMDDHHmmss');
const fileName = `${timestamp}-${migrationName}.ts`;
const fullPath = `src/db/migrations/${fileName}`;

fs.writeFile(fullPath, migrationSkeleton, function (err) {
  if (err) return console.log(err);
  console.log('[ ✓ ] New migration created:', fullPath);
});