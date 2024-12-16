import React from 'react';

const YouMightAlsoLike = () => {
  return (
    <div className="my-12">
      <h2 className="flex justify-center items-center font-extrabold text-3xl mb-6">You Might Also Like</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Product 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src="/Tshirt1.png" alt="Polo with Contrast Trims" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold">Polo with Contrast Trims</h3>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-sm text-gray-500 ml-2">(4.0/5)</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-lg font-bold">$212</span>
            <span className="text-sm line-through text-gray-500">$242</span>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src="/Tshirt2.png" alt="Gradient Graphic T-shirt" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold">Gradient Graphic T-shirt</h3>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">★★★☆☆</span>
            <span className="text-sm text-gray-500 ml-2">(3.5/5)</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-lg font-bold">$145</span>
            <span className="text-sm line-through text-gray-500">$180</span>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src="/Tshirt3.png" alt="Polo with Tipping Details" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold">Polo with Tipping Details</h3>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-sm text-gray-500 ml-2">(4.5/5)</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-lg font-bold">$120</span>
            <span className="text-sm line-through text-gray-500">$150</span>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src="/Tshirt4.png" alt="Black Striped T-shirt" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold">Black Striped T-shirt</h3>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-sm text-gray-500 ml-2">(5.0/5)</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-lg font-bold">$180</span>
            <span className="text-sm line-through text-gray-500">$150</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouMightAlsoLike;


// w-[295] h-[298] top-[1991px] left-[730px] cataigerious