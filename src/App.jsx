import { useState } from 'react'
import './App.css'
import Tables from './components/TableDashboard';

function App() {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Granny's Table</title>
      </head>
      <body>
        <Tables />
      </body>
    </html>
  );
};

export default App
