import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import CartItem from './CartItem/CartItem'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

  const EmptyCart = () => (
    <>
        <div className="my-10">
          <p className="text-center text-base tracking-widest">Twój koszyk jest pusty</p>
          <Link to="/shop" className="text-center text-base tracking-widest border-b-2 border-black	" >Dodaj produkty do koszyka!</Link>
        </div>
    </>
)

const FilledCart = () => (
  <>
      <div className="container" spacing={3}>
          {cart.line_items.map((item) => (
              <div className="grid" key={item.id}>
                  <CartItem
                      item={item}
                      onUpdateCartQty={handleUpdateCartQty}
                      onRemoveFromCart={handleRemoveFromCart}
                  />
              </div>
          ))}
      </div>
      <div className="my-10">
          <div className="text-base tracking-widest font-medium">
              Razem: {cart.subtotal.formatted} zł
          </div>
          <div className="cursor-pointer my-2" onClick={handleEmptyCart}>
                <p className="text-center text-base tracking-widest">Wyczyść koszyk</p>
          </div>
          <div className="flex justify-between w-10/12 mx-auto my-6">
              <Link to="/shop" className="cursor-pointer my-2 border-b-2 border-black" onClick={handleEmptyCart}>
                <p className="text-center text-base tracking-widest">Powrót do sklepu</p>
              </Link>
              <Link to="/checkout" className="border-2 border-black cursor-pointer px-4 py-2">                
                <p className="text-center text-base tracking-widest">Do kasy</p>
              </Link>
          </div>
      </div>
  </>
)

if (!cart.line_items) return "Loading";

return (
    <div className="text-2xl text-center mt-6 tracking-widest">
      <p>Koszyk</p>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </div>
  )
}

export default Cart
