import './App.css';
import Body from './components/Body';
import Foodcards from './components/Foodcards';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';
import Restaurant from './components/Restaurant';

function App() {
  return (
    <div>
       <Header></Header>
       <Foodcards></Foodcards>
       <Body></Body>
       <Items></Items>
       <Restaurant></Restaurant>
       <Footer></Footer>
       
    </div>
  );
}

export default App;
