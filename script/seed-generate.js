/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const moment = require('moment');
const { exit } = require('process');

const migrationSkeleton = `import { QueryInterface } from 'sequelize';

export async function up(query: QueryInterface): Promise<void> {
  query.bulkInsert('People', [{
    name: 'John Doe',
    isBetaMember: false
  }], {});
}

/**
 * function that sequelize-cli runs if you want to remove this migration from your database
 * */
export async function down(query: QueryInterface): Promise<void> {
  query.bulkDelete('People', null, {});
}
`;

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('[ERROR] You must provide seed name as parameter');
  exit(1);
}
if (args.length > 1) {
  console.error('[ERROR] Seed name must not have spaces');
  exit(1);
}
const seedName = [args];
const timestamp = moment().utc().format('YYYYMMDDHHmmss');
const fileName = `${timestamp}-${seedName}.ts`;
const fullPath = `src/db/seeders/${fileName}`;

fs.writeFile(fullPath, migrationSkeleton, function (err) {
  if (err) return console.log(err);
  console.log('[ ✓ ] New seed created:', fullPath);
});