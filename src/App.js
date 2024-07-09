import './App.css';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import { useState } from 'react';

function App() {
  const [filterValue, setFilterValue] = useState('')
  return (
    <>
      <MyNav filterValue={filterValue} setFilterValue={setFilterValue}></MyNav>
      <Welcome></Welcome>
      <AllTheBooks filterValue={filterValue}></AllTheBooks>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
