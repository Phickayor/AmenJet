import React from "react";

function Reviews() {
  const reviews = [
    {
      service: "Mobile Nursing",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    },
    {
      service: "Home Embambling",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    },
    {
      service: "Mental Nursing",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    },
    {
      service: "Mobile Nursing",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    },
    {
      service: "Home Embambling",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    },
    {
      service: "Mental Nursing",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    },
    {
      service: "Mobile Nursing",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    },
    {
      service: "Home Embambling",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    },
    {
      service: "Mental Nursing",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    }
  ];
  function scroll() {
    var allReviews = document.getElementById("allReviews");
    var allReviewsWidth = allReviews.scrollWidth - allReviews.clientWidth;

    if (allReviews.scrollLeft === allReviewsWidth) {
      allReviews.scrollTo(0, 0);
    } else {
      allReviews.scrollTo(allReviews.scrollLeft + 1, 0);
    }
  }
  setInterval(() => {
    scroll();
  }, 15);
  return (
    <div id="reviews" className="h-full">
      <h1 className="text-5xl mt-36 font-serif">
        The <i className="text-blue-600">Reviews</i>
      </h1>
      <div className="flex overflow-x-scroll" id="allReviews">
        {reviews.map((review) => (
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="m-10 lg:min-w-max h-80 flex flex-wrap justify-center border-white border-4 rounded-3xl shadow-2xl"
          >
            <h1 className="text-4xl border-b p-5 self-baseline border-white rounded-3xl font-serif w-full">
              {review.service}
            </h1>
            <q className="text-lg font-mono w-full">{review.review}</q>
            <cite>{"~" + review.author}</cite>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
