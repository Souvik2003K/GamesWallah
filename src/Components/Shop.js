import React from 'react'
import { useState } from 'react'
import './CssFiles/Game.css'

function Shop(props) {

    
    const newCart = JSON.parse(localStorage.getItem('carts'));
    const [Items, setItems] = useState(newCart)



    const removeItem = (index) => {
        const updatedItems = Object.values(Items).filter(item => item.id !== index)
        
        let arrayOfObjects = JSON.parse(localStorage.getItem('carts')) || [];
        const objectToRemoveIndex = arrayOfObjects.findIndex(obj => obj.id === index);
        if (objectToRemoveIndex > -1) {
        arrayOfObjects.splice(objectToRemoveIndex, 1);
        }
        localStorage.setItem('carts', JSON.stringify(arrayOfObjects));

        
        setItems(updatedItems);
        }


    return (
        Items?.length>0?(
            <div className="parent">
                {Items.map((item)=>{
                return (
                        <div className='cart-main' key={item.id}>
                            <h1>{item.name}</h1>
                            <h2>${item.price}</h2>
                            <button className='btn btn-danger btn-lg' onClick={()=>{removeItem(item.id)}}>Remove</button>
                        </div>
                )
            })}
            </div>
        )
        :
        (
            <div className='parent'>
                <div className="card mt-5 p-3 position-relative top-40 start-50 translate-middle-x" style={{width: '18rem'}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png" className="card-img-top" alt="cart" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Your cart is empty</h5>
                        <p className="card-text text-center">There are no items displayed add items as per convinience</p>
                    </div>
                </div>
            </div>
        )
    )
}

export default Shop