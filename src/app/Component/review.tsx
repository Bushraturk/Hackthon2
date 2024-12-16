import { FaAngleDown } from "react-icons/fa";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Samantha D.",
      date: "Posted on August 14, 2023",
      content: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
    },
    {
      name: "Alex M.",
      date: "Posted on August 15, 2023",
      content: `"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."`,
    },
    {
      name: "Ethan R.",
      date: "Posted on August 16, 2023",
      content: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
    },
    {
      name: "Olivia P.",
      date: "Posted on August 17, 2023",
      content: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
    },
    {
      name: "Liam K.",
      date: "Posted on August 18, 2023",
      content: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
    },
    {
      name: "Ava H.",
      date: "Posted on August 19, 2023",
      content: `"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."`,
    },
  ];

  // <div className="mb-12">
  // {/* <h2 className="text-2xl font-semibold mb-4">All Reviews </h2> */}
  // <div className="flex justify-between mb-6">
  //   <button className="text-blue-500 hover:underline">Latest</button>
  //   <button className="text-blue-500 hover:underline">Write a Review</button>
  // </div>
  // </d

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 md:gap-0">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">
          All Reviews <span className="text-sm">(451)</span>
        </h2>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Image */}
          <img
            src="Frame1.png"
            alt="frame"
            className="w-10 h-10 md:w-auto md:h-auto"
          />
          {/* Buttons */}
          <button className="text-black flex bg-[#F2F0F1] w-full md:w-28 justify-center items-center gap-2 rounded-full text-sm px-4 py-2 hover:underline">
            Latest <FaAngleDown />
          </button>
          <button className="text-white bg-black rounded-full w-full md:w-32 text-sm px-4 py-2 hover:underline">
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 border rounded-lg shadow-sm"
          >
            <div className="w-12 h-12 rounded-full"></div>
            <div>
              <p className="flex justify-between text-sm text-yellow-500">
                {" "}
                ★ ★ ★ ★ ★{" "}
                <span>
                  <img src="Frame2.png" alt="" />
                </span>
              </p>

              <p className="flex font-semibold">
                {review.name}
                <span>
                  <img src="Frame.png" alt="" />
                </span>
              </p>
              <p className="mt-2">{review.content} </p>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-6">
        <button className="text-black rounded-full w-44 border hover:underline">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default ReviewsSection;
