import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./BraceletDetail.css";

const BraceletDetail = () => {
  const { id } = useParams();
  const [bracelet, setBracelet] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    axios
      .get(`https://vuoncotich-6.onrender.com/bracelet/${id}`)
      .then((res) => {
        setBracelet(res.data);
        setMainImage(res.data.coverImage); // Ảnh chính mặc định
      })
      .catch((err) => console.error("Lỗi khi fetch bracelet detail:", err));
  }, [id]);

  if (!bracelet) return <p>Đang tải...</p>;

  return (
    <div className="detail-container">
      {/* Cột bên trái: Ảnh */}
      <div className="image-section">
  {/* Ảnh chính */}
  <img src={mainImage} alt={bracelet.name} className="main-image" />

  {/* Slide ảnh nhỏ */}
  <Swiper slidesPerView={4} spaceBetween={30} className="thumbs">
    {[ ...bracelet.descriptionImages].map((img, idx) => (
      <SwiperSlide key={idx}>
        <img
          src={img}
          alt={`thumb-${idx}`}
          className="thumb-image"
          onClick={() => setMainImage(img)}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>


      {/* Cột bên phải: Thông tin */}
      <div className="info-section">
        <h2>{bracelet.name}</h2>
        <p className="price">{bracelet.price}</p>
        <p><strong>Chất liệu:</strong> {bracelet.description.material}</p>
        <p><strong>Kích thước:</strong> {bracelet.description.size}</p>
        <p><strong>Màu charm:</strong> {bracelet.description.colorCharm}</p>
        {bracelet.description.note && (
          <p><strong>Ghi chú:</strong> {bracelet.description.note}</p>
        )}
      </div>
    </div>
  );
};

export default BraceletDetail;
