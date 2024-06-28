import './App.css';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <MyNav></MyNav>
      <Welcome></Welcome>
      <AllTheBooks></AllTheBooks>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
