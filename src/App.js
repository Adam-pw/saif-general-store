import './App.css';
import  {Navbarmy}  from "./Components/navbar/Navbarmy";
import { Mainfrontlogo } from "./Components/mainfrontlogo/Mainfrontlogo";
import { Shopingitems } from "./Components/shopingitems/Shopingitems";
import  {Footer}  from "./Components/footer/Footer";
import {  } from "./Components/slideshow/Slideshow";
import { Slideshow } from './Components/shopingitems/slideshow/Slideshow';

function App() {
  return (
    <>
    <div className='bgcol'>
    <Navbarmy/>
    <Mainfrontlogo/>
    <Slideshow/>
    <Shopingitems/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
