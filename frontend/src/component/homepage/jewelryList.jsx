import React from 'react'
import "./jewelry.css"
import { Link } from "react-router-dom";
const categories = [
  {
    title: "Vòng tay",
    image: "http://res.cloudinary.com/dxxfcshgu/image/upload/v1757948230/qrrjtlyka04ax45hwxpv.jpg",
    link: "/bracelets"
  },
  {
    title: "Vòng cổ",
    image: "http://res.cloudinary.com/dxxfcshgu/image/upload/v1757948230/qrrjtlyka04ax45hwxpv.jpg",

    link: "/necklaces"
  },
  {
    title: "Nhẫn",
    image: "http://res.cloudinary.com/dxxfcshgu/image/upload/v1757948230/qrrjtlyka04ax45hwxpv.jpg",
    link: "/rings"
  },
  {
    title: "Khuyên tai",
    image: "http://res.cloudinary.com/dxxfcshgu/image/upload/v1757948230/qrrjtlyka04ax45hwxpv.jpg",
    link: "/earrings"
  },
];
const JewelryList = () => {
  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <div className="image-box">

            <Link to={category.link}>
              <img src={category.image} alt={category.title} />
            </Link>
          </div>
          <h3 className='category-title'>{category.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default JewelryList
