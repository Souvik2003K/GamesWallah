import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CssFiles/Game.css'

function Game(props) {


    function Game(props){
    const [value, setValue] = useState(false);

    // localStorage.clear()

    const notifysuccess = () => {toast.success('Added to Cart', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });}

    const notWorking = () => {toast.error('Server Problem', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });}

    const notifyerror = () => {toast.error('Already in the Cart', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });}

    const added = (i)=>{
        if(value === false){
            props.addToCart(i)
            setValue(true)
            notifysuccess()
        
            
            let arr = localStorage.getItem('carts')
            let data = arr ? JSON.parse(arr) : []
            data.push(props.productEach);
            let updData = JSON.stringify(data);
            localStorage.setItem('carts', updData);
        }
        else{
                notifyerror()
                return
            }
    }


        return(
            <div className='main-box'>
                <div className='gaming-wrapper'> 
                    <div className='the-game-box'>
                        <img src={props.productEach.url} className='game-img' alt={props.productEach.alt} />
                        <div className="games-desc">
                            <h1 className='name'>{props.productEach.name}</h1>
                            <h2 className='price'>${props.productEach.price}</h2>
                            <p className='details'>{props.productEach.description}</p>
                            <div className="buttons">
                                <button className='addtocart btn btn-outline-success btn-lg' onClick={ ()=>{ added(props.productEach.id) } }>Add to cart</button>
                                <ToastContainer />
                                <button className='addtocart btn btn-outline-danger btn-lg' onClick={()=>{notWorking()}}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // -------------------
    return (
        props.productList.length>0?(
            <div className="game-parent">
                {
                    props.productList.map((items,pic)=>{
                return <Game productEach={items} addToCart={props.addToCart} key={items.id} />
            })
                }
            </div>
        ):(
            <h1>Nothing to display</h1>
        )
        
    )



}

export default Game



// TODO: 1) Webpack use
// TODO: 2) make bundle for images