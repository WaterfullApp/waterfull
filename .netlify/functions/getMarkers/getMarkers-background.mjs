const faunadb = require('faunadb');
// initialize faunaDB client with our secret
const client = new faunadb.Client({
    secret: process.env.FAUNADB_ADMIN_SECRET,
    domain: 'db.fauna.com',
    scheme: 'https'
});
// the query object provides us with functions to create a new document in the collection
const q = faunadb.query;

exports.handler = async (event, context) => {
    try {
        const res = await client.query(
            // map through each document returned by paginate
            q.Map(
                // get documents from collection
                q.Paginate(
                    q.Documents(
                        q.Collection('Markers')
                    )
                ),
                // get content of each document
                q.Lambda('doc', q.Get(q.Var('doc')))
            )
        );
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Successfully fetched documents',
                data: res.data
            })
        };
                } catch (error) {
        console.log(error);
        return {
            statusCode: 400,
            body: JSON.stringify({
                error
            })
        };
    }
}