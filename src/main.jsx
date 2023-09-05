import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pokemons from './pages/Pokemons/Pokemons.jsx';
import './main.css';


import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import GameProvider from './providers/GameProvider.jsx'
import Game from './pages/Game/Game.jsx';
import BattleGameProvider from './providers/BattleGameProvider.jsx';
import BattleGame from './pages/BattleGame/BattleGame.jsx';

const route = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path : "/",
        element : <Home />,
      },
      {
        path : "/pokemons",
        element : <Pokemons />,
      },
      {
        path : "/game",
        element : <GameProvider><Game /></GameProvider>,
      },
      {
        path : "/battlegame",
        element : <BattleGameProvider><BattleGame /></BattleGameProvider>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
