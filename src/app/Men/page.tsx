import React from 'react';
import ProductPage from '../Component/Product'; 
import ReviewsSection from '../Component/review';
import YouMightAlsoLike from '../Component/Tshirt';
import NewsletterSubscription from '../Component/Newsletter';

const ProductDetail = () => {
  return (
    <div>
      <ProductPage/>
      <ReviewsSection/>
      <YouMightAlsoLike/>
      <NewsletterSubscription/>

    </div>
  );
};
// Productdetail.tsx

export default ProductDetail;

