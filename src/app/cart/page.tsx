
import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdLocalOffer } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import NewsletterSubscription from "../Component/Newsletter";



const Cart = () => {
  return (
    <div className="bg-gray-50">
       {/* Left Side */}
              <nav className="ml-4 sm:ml-20 text-sm text-black mb-4">
                <ol className="flex space-x-2">
                  <li>Home</li>
                  <li>
                    <FaAngleRight size={20} />
                  </li>
                  <li>Cart</li>
                </ol>
              </nav>
      {/* Cart Section */}
      <main className="container mx-auto p-6">
        <h2 className="text-2xl w-[259px] h-[48px] font-bold mb-6">YOUR CART</h2>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1 bg-white shadow p-4 rounded">
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-center gap-4 border-b pb-4 relative">
                <img src="/cart.png" alt="Graphic T-shirt" className="w-20 h-20 rounded" />
                <div className="flex-1">
                  <h3 className="font-bold">Gradient Graphic T-shirt</h3>
                  <p className="text-gray-500 text-sm">Size: Large | Color: White</p>
                  <p className="mt-2 font-semibold">$145</p>
                </div>
                <div className="absolute top-0 right-0">
                  <button className="ml-72 pl-40 top-56 mb-16">
                    <RiDeleteBin6Fill size={20} className="text-red-500 justify-items-end items-start" />
                  </button>
                </div>
                <div className="flex mt-9 bg-gray-300 border rounded-lg items-center gap-2">
                  <button className="text-gray-500 border rounded px-2">-</button>
                  <span>1</span>
                  <button className="text-gray-500 border rounded px-2">+</button>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-4 border-b pb-4 relative">
                <img src="/cart1.png" alt="Checkered Shirt" className="w-20 h-20 rounded" />
                <div className="flex-1">
                  <h3 className="font-bold">Checkered Shirt</h3>
                  <p className="text-gray-500 text-sm">Size: Medium | Color: Red</p>
                  <p className="mt-2 font-semibold">$180</p>
                </div>
                <div className="absolute top-0 right-0">
                  <button className="ml-72 pl-40 top-56 mb-16">
                    <RiDeleteBin6Fill size={20} className="text-red-500 justify-items-end items-start" />
                  </button>
                </div>
                <div className="flex mt-9 bg-gray-300 border rounded-lg items-center gap-2">
                  <button className="text-gray-500 border rounded px-2">-</button>
                  <span>1</span>
                  <button className="text-gray-500 border rounded px-2">+</button>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-4 pb-4 relative">
                <img src="/cart2.png" alt="Skinny Fit Jeans" className="w-20 h-20 rounded" />
                <div className="flex-1">
                  <h3 className="font-bold">Skinny Fit Jeans</h3>
                  <p className="text-gray-500 text-sm">Size: Large | Color: Blue</p>
                  <p className="mt-2 font-semibold">$240</p>
                </div>
                <div className="absolute top-0 right-0">
                  <button className="ml-72 pl-40 top-56 mb-16">
                    <RiDeleteBin6Fill size={20} className="text-red-500 justify-items-end items-start" />
                  </button>
                </div>
                <div className="flex mt-9 bg-gray-300 border rounded-lg items-center gap-2">
                  <button className="text-gray-500 border rounded px-2">-</button>
                  <span>1</span>
                  <button className="text-gray-500 border rounded px-2">+</button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-white shadow p-6 rounded">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$565</span>
              </div>
              <div className="flex justify-between">
                <span>Discount (-20%)</span>
                <span className="text-red-500">-$113</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>$15</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$467</span>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
            <MdLocalOffer size={40} className="flex bg-gray-200"/>

              <input
                type="text"
                placeholder="Add promo code"
                className="flex relative w-[326px] border rounded  h-[48px] p-2 mb-4 bg-gray-200"
              />
              <button className="w-28 h-12 bg-black text-white rounded-full p-0">
                Apply
              </button>
            </div>
            <button className="w-full bg-black text-white rounded p-3 mt-4">
              Go to Checkout →
            </button>
          </div>
        </div>
      </main>
      <NewsletterSubscription />
      
    </div>
  );
};

export default Cart;

