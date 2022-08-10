import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import { createServer, Model } from 'miragejs';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Criação de landing page',
          amount: 3400,
          type: 'deposit',
          category: 'dev',
          createdAt: new Date('2022-08-11 09:15:00'),
        },
        {
          id: 2,
          title: 'Compras',
          amount: 640,
          type: 'withdraw',
          category: 'casa',
          createdAt: new Date('2022-08-10 08:00:00'),
        }
      ]
    })
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      
      return schema.create('transaction', data)
    })
  }
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
