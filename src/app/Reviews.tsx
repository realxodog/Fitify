'ues client'

import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'


// A mock data array of reviews
const reviews = [
  {
    id: 1,
    name: 'Alice',
    rating: 5,
    image: '/ali.jpg',
    comment: 'This app is amazing! It helped me improve my flexibility and strength in just a few weeks. The exercises are easy to follow and the feedback is very helpful.',
  },
  {
    id: 2,
    name: 'Bob',
    rating: 4,
    image: '/bob.jpg',
    comment: 'I like this app a lot. It has a lot of variety and challenge. The only thing I wish is that it had more customization options for the routines.',
  },
  {
    id: 3,
    name: 'Charlie',
    rating: 3,
    image: '/cha.jpg',
    comment: 'This app is okay, but not great. It does have some good exercises, but the interface is not very user-friendly and the app crashes sometimes.',
  },
]

// A function to render the stars based on the rating
const renderStars = (rating: number) => {
  let stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      <StarIcon
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-500' : 'text-gray-300'
        }`}
      />
    )
  }
  return stars
}

// The main component that renders the reviews
const Reviews = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:py-16 lg:px-8" id="reviews">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">What people are saying</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {review.name}
                  </h3>
                  <div className="flex mt-1">{renderStars(review.rating)}</div>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reviews