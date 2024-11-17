import React, { useContext } from 'react';
//icons
import { IoArrowForward, IoCartOutline, IoClose } from 'react-icons/io5';
//context
import { CartContext } from '../context/CartContext';
// componnts
import CartItem from '../components/CartItem';
// stripe 
import { loadStripe } from '@stripe/stripe-js';
import { request } from '../request';
const Cart = () => {
  const { isOpen, setIsOpen, cart, total, clearCart } = useContext(CartContext);
  const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      // Send documentId instead of id in the cart data
      const res = await request.post('/orders', { cart: cart.map(item => ({ documentId: item.documentId, amount: item.amount })) });
      await stripe.redirectToCheckout({
        sessionId: res.data.id
      });
    } catch (error) {
      console.error("Error occurred during checkout try again:", error);
      alert(error.response?.data?.error || "An error occurred while processing your payment.");
    }
  };
  return <div className='w-full h-full px-4 text-white'>
    <div className=' overflow-y-auto overflow-x-hidden h-[75vh]'>
      {/* close icon */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='text-4xl w-20 h-[98px] flex  justify-start items-center cursor-pointer'>
        <IoClose />
      </div>
      <div className='flex flex-col gap-y-10 px-2'>
        {cart.map((item) => {
          return (
            <CartItem item={item} key={item?.id} />
          )
        })}
      </div>
    </div>
    {/* subtotal & total */}
    {cart.length >= 1 && (
      <div className='px-6 py-5 flex flex-col '>
        {/* subtotal */}
        <div className='flex justify-between text-lg'>
          <div>Subtotal</div>
          <div>{total} Kr</div>
        </div>
        {/* total */}
        <div className='flex justify-between text-2xl'>
          <div>Total</div>
          <div>{total} Kr</div>
        </div>
      </div>
    )}
    {/* buttons */}
    <div className='px-5'>
      {cart.length >= 1 ?
        (<div className=' flex justify-between gap-x-4'>
          <button onClick={clearCart} className='btn bg-accent text-primary hover:bg-accent-hover '>Clear Cart</button>
          <button onClick={handlePayment} className='btn bg-accent text-primary hover:bg-accent-hover flex-1 px-2 gap-x-2  '>
            Checkout
            <IoArrowForward className='text-lg' />
          </button>
        </div>)
        : (
          <div className='h-full absolute top-0 left-0 right-0 flex justify-center items-center -z-10 flex-col text-white/30'>
            <div className='text-2xl ' >
              Your cart is empty
            </div>
            <div className='text-6xl pt-2 ' >
              <IoCartOutline />
            </div>
          </div>)}
    </div>
  </div>;
};

export default Cart;
