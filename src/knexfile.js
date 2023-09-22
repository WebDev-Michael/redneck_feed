const sharedConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    seeds: { directory: './data/seeds' },
    migrations: {directory: './data/migrations'},
    pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) }
}

module.exports = {
    development: {
        ...sharedConfig, 
        connection: { filename: './data/feed.db3' },
    },
    testing: {
        ...sharedConfig,
        connection: { filename: './data/feed.test.db3' },
    },
    production: {}
}