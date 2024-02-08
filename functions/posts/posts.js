const faunadb = require('faunadb');
// initialize faunaDB client with our secret
const client = new faunadb.Client({
    secret: process.env.FAUNADB_ADMIN_SECRET,
    domain: 'db.fauna.com',
    scheme: 'https'
});
const apiKey = process.env.VITE_X_API_KEY
// the query object provides us with functions to create a new document in the collection
const q = faunadb.query;

exports.handler = async (event, context) => {
    const requestKey = event.headers['x-api-key']
    if (apiKey === requestKey) {
        // get the data from the body of the request
        const data = JSON.parse(event.body);
        try {
            // create document in existing collection
            const response = await client.query(
                q.Create(q.Collection('Markers'), {
                    data
                })
            );
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'Successfully created document',
                    data: response
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
    } else {
        return {
            statusCode: 500,
            body: 'DENIED'
        }
    }
};