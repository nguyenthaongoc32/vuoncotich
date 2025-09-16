import React from 'react'
import "./jewelry.css"
const categories = [
    {
      title: "Vòng tay",
      image: "http://res.cloudinary.com/dxxfcshgu/image/upload/v1757948230/qrrjtlyka04ax45hwxpv.jpg",
    },
    {
      title: "Vòng cổ",
      image: "http://res.cloudinary.com/dxxfcshgu/image/upload/v1757948230/qrrjtlyka04ax45hwxpv.jpg",
    },
    {
      title: "Nhẫn",
      image: "http://res.cloudinary.com/dxxfcshgu/image/upload/v1757948230/qrrjtlyka04ax45hwxpv.jpg",
    },
    {
      title: "Khuyên tai",
      image: "http://res.cloudinary.com/dxxfcshgu/image/upload/v1757948230/qrrjtlyka04ax45hwxpv.jpg",
    },
  ];
const JewelryList = () => {
  return (
    <div className="category-container">
    {categories.map((category, index) => (
      <div key={index} className="category-item">
        <div className="image-box">
          <img src={category.image} alt={category.title} />
        </div>
        <h3>{category.title}</h3>
      </div>
    ))}
  </div>
  )
}

export default JewelryList
