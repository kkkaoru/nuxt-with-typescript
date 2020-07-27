import 'source-map-support/register';
import { APIGatewayProxyHandler } from 'aws-lambda';
import awsServerlessExpress from 'aws-serverless-express';
import app from './app';

const server = awsServerlessExpress.createServer(app);

export const render: APIGatewayProxyHandler = (event, context, _) => {
  // eslint-disable-next-line no-console
  console.log('[info]', 'Event', JSON.stringify(event, null, 2));
  awsServerlessExpress.proxy(server, event, context);
};
