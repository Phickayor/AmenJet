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
      alert(allReviewsWidth);
    } else {
      allReviews.scrollTo(allReviews.scrollLeft + 1, 0);
    }
  }
  setInterval(() => {
    scroll();
  }, 20);
  return (
    <div>
      <h1 className="text-5xl mt-10 font-serif">
        The <i className="text-blue-600">Reviews</i>
      </h1>
      <div className="flex overflow-x-scroll" id="allReviews">
        {reviews.map((review) => (
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="w-96 m-5 h-96 flex flex-wrap justify-center border-8 rounded-3xl"
          >
            <h1 className="text-4xl border-b p-5 self-baseline rounded-3xl font-serif w-full">
              {review.service}
            </h1>
            <p className="text-lg font-mono w-full">{review.review}</p>
            <blockquote>{"~" + review.author}</blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
