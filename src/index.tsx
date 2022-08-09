import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import { createServer } from 'miragejs';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          title: "Desenvolvimento Web",
          value: 12000,
          category: "desenvolvimento web",
          date: new Date("08-08-2022 23:16:00").toLocaleString("pt-BR", {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })
        }
      ]
    })
  }
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
