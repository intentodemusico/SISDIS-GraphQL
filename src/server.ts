import cors from 'cors';
import compression from 'compression';

import express, { Application } from "express";
import { createServer } from 'http';

import expressPlayGround from "graphql-playground-middleware-express";
import { ApolloServer } from "apollo-server-express"; 
import schema from "./schema";

class Server {

    public app: Application;
    public apolloServer: ApolloServer;

    constructor() {
        this.app = express();
        this.apolloServer = new ApolloServer({
            schema, 
            introspection: true
        });
        this.apolloServer.applyMiddleware(this);
        this.config();
        this.route();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use('*', cors());
        this.app.use(compression());
    }

    route(): void {
        this.app.get('/', expressPlayGround({
            endpoint: '/graphql'
        }));
    }

    start(): void {
        const httpServer = createServer(this.app);
        httpServer.listen(this.app.get('port'), () => {
            console.log('Server: http://localhost:'+this.app.get('port')+'/graphql');
        });
    }
} 

const server = new Server();
server.start();