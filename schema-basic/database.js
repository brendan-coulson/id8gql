import path from 'path'

// connect to our database file
const dataFilePath = path.join(__dirname, '../data/demo-data.sl3')
//const pgUrl = "postgres://id8admin:secret@localhost:5432/id8db"
const pgUrl = "postgres://id8admin%40id8db:%24j6Osh%2624P@id8db.postgres.database.azure.com:5432/id8db?ssl=true"
const connection = pgUrl || {filename: dataFilePath}

// knex is a convenient library that can connect to various SQL databases
// you can use any library you wish
export default require('knex')({
    client: pgUrl ? 'pg' : 'sqlite3',
    connection,
    useNullAsDefault: true
})
