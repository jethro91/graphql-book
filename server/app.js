const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross origin requests
app.use(cors());

// connect to mlab database
// make sure to replace db string & creds with your own
mongoose.connect('mongodb://jethro:bhaskara91@ds263590.mlab.com:63590/gql-jethro');
mongoose.connection.once('open', ()=>{
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
}));

app.listen(4000, ()=>{
  console.log('now listening for requests on port 4000');
});

