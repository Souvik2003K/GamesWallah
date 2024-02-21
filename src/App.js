import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import { useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Game from './Components/Game';
import Shop from './Components/Shop';
import Footer from './Components/Footer';

import img1 from './Components/ImagesFile/zelda.jpg';
import img2 from './Components/ImagesFile/rdd2.jpg';
import img3 from './Components/ImagesFile/punk.jpg';
import img4 from './Components/ImagesFile/mario.jpg';
import img5 from './Components/ImagesFile/last2.png';
import img6 from './Components/ImagesFile/rock.png';



function App() {
  const products = [
    {
      id: 0,
      name: "The Legend of Zelda",
      price: 59.99,
      description: "The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo.",
      url: img1,
      alt: 'zelda'
    },
    
    {
      id: 1,
      name: "Red Dead Redemption 2",
      price: 49.99,
      description: "Red Dead Redemption 2 is an action-adventure game developed and published by Rockstar Games.",
      url: img2,
      alt: 'rdd2'
    },
    {
      id: 2,
      name: "Cyberpunk 2077",
      price: 59.99,
      description: "Cyberpunk 2077 is an open-world action role-playing game developed and published by CD Projekt. The game is set in a dystopian future in the year 2077.",
      url: img3,
      alt: 'punk'
    },
    {
      id: 3,
      name: "Super Mario Odyssey",
      price: 49.99,
      description: "Super Mario Odyssey is a platform game developed and published by Nintendo for the Nintendo Switch.",
      url: img4,
      alt: 'mario',
    },
    {
      id: 4,
      name: "The Last of Us Part II",
      price: 59.99,
      description: "The Last of Us Part II is an action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment.",
      url: img5,
      alt: 'last2',
    },
    {
      id: 5,
      name: "Rock Paper and Shotgun",
      price: 59.99,
      description: "Rock, Paper, and Shotgun is a popular hand game that has been enjoyed by people of all ages for generations. It is a simple and engaging game that requires no equipment, making it accessible and easy to play anytime, anywhere.",
      url: img6,
      alt: 'rock',
    }
  ]



  const newList = [];
  
  
  const addToCart = (index)=>{
    if(products[index].name in newList){
      // console.log("already in the cart list")
      return
    }
    else{
      newList.push({
        id:(newList.length),
        name:products[index].name,
        price:products[index].price,
      })
    }
  }



  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} ></Route>
        <Route exact path='/games' element={<Game productList={products} addToCart={addToCart} />} ></Route>
        <Route exact path='/shop' element={<Shop CartList={newList} />} ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
