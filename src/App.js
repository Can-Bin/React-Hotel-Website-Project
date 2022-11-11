import './App.css';
import AppRouter from './router/AppRouter';
import RoomContextProvider, {RoomContext} from "./Context"
import { useEffect, useState } from 'react';
import items from "./data"


function App() {
  
  return (
    <div >
      <RoomContextProvider >
        <AppRouter/>
      </RoomContextProvider>
    </div>
  );
}

export default App;
