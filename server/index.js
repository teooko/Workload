import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import express from 'express';
import http from 'http';
import { gql } from 'apollo-server';
import Pool from 'pg';
import dotenv from 'dotenv';
import typeDefs from './graphql/schema.js';
dotenv.config()
let prof = ""
let task = ""
let task_time = ""
const connectDb = async () => {
  try {
      const pool = new Pool.Pool({
          user: process.env.PGUSER,
          host: process.env.PGHOST,
          database: process.env.PGDATABASE,
          password: process.env.PGPASSWORD,
          port: process.env.PGPORT,
      });
      
      await pool.connect()
      prof = await pool.query('SELECT * FROM profile')
      task = await pool.query('SELECT * FROM task')
      task_time = await pool.query('SELECT * FROM task_time')
      
      //console.log(task_time)
      //await pool.end()
      
  } catch (error) {
      console.log(error)
  }
}

const resolvers = {
  Query: {
      allProfiles: () => prof.rows,
      allTasks: () => task.rows,
      allTaskTimes: () => task_time.rows,
  }
}

async function startApolloServer(typeDefs, resolvers) {
  // Required logic for integrating with Express
  const app = express();
  // Our httpServer handles incoming requests to our Express app.
  // Below, we tell Apollo Server to "drain" this httpServer,
  // enabling our servers to shut down gracefully.
  const httpServer = http.createServer(app);

  // Same ApolloServer initialization as before, plus the drain plugin
  // for our httpServer.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
    dataSources: () => ({ prof, task, task_time })
  });

  // More required logic for integrating with Express
  await server.start();
  server.applyMiddleware({
    app,

    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: '/',
  });

  // Modified server startup
  
  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
  
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
 
}
await connectDb()

//then(startApolloServer(typeDefs, resolvers));
startApolloServer(typeDefs, resolvers);

