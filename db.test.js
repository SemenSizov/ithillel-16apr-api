import pg from 'pg'
const { Client } = pg
const client = new Client()
await client.connect()

test('check query', async()=>{
  const res = await client.query('SELECT $1::text as message LIMIT 10', ['Hello world!'])
  expect(res.rows).toHaveLength(10)
})

console.log(res.rows[0].message) // Hello world!
await client.end()