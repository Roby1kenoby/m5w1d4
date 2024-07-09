import './App.css';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import { useState } from 'react';
import { DarkTheme } from './Context';

function App() {
  const [filterValue, setFilterValue] = useState('')
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <>
      <DarkTheme.Provider value={[darkTheme, setDarkTheme]}>
        <MyNav filterValue={filterValue} setFilterValue={setFilterValue}></MyNav>
        <Welcome></Welcome>
        <AllTheBooks filterValue={filterValue}></AllTheBooks>
        <MyFooter></MyFooter>
      </DarkTheme.Provider>
    </>
  );
}

export default App;
