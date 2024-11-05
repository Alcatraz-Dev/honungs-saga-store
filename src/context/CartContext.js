import React, { createContext, useEffect, useState } from 'react';
// create context 
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [itemsAmount, setItemsAmount] = useState(0)
  const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState(0)
  // cart amount 
  useEffect(() => {
    const amount = cart.reduce((acc, item) => {
      return acc + item.amount
    }, 0)
    setItemsAmount(amount)
  }, [cart])
  // cart total
  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.amount
    }, 0)
    setTotal(total.toFixed(2))
  }, [cart])
  // add to cart
  const addToCart = (item, id) => {
    const itemID = parseInt(id)
    const newItem = { ...item[0], amount: 1 }
    setCart([...cart, newItem])
    // check if item is already in cart
    const cartItem = cart.find((item) => item.id === itemID)
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === itemID) {
          setAmount(cartItem.amount + 1)
          return { ...item, amount: item.amount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
    setIsOpen(true)
  }
  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
  }
  // handle cart input 
  const handleInput = (e, id) => {
    const value = parseInt(e.target.value)
    // find the item in the cart by id
    const cartItem = cart.find((item) => item.id === parseInt(id))
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === parseInt(id)) {
          if (isNaN(value)) {
            setAmount(1)
            return { ...item, amount: 1 }
          } else {
            setAmount(value)
            return { ...item, amount: value }
          }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    setIsOpen(true)
  }
  // handle select 
  const handleSelect = (e, id) => {
    const value = parseInt(e.target.value)
    // find the item in the cart by id
    const cartItem = cart.find((item) => item.id === parseInt(id))
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          setAmount(value)
          return { ...item, amount: value }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
  }
  // clear cart 
  const clearCart = () => {
    setCart([])
  }

  return <CartContext.Provider value={{ isOpen, setIsOpen, addToCart, cart, removeFromCart, itemsAmount, handleInput, handleSelect, total, clearCart }}>
    {children}
  </CartContext.Provider>;
};

export default CartProvider;
