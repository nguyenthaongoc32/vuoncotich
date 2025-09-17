import React, { useState, useEffect } from "react";
import "./BraceletDetail.css";
import { useParams, useNavigate } from "react-router-dom"; 
import axios from "axios";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BraceletDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bracelet, setBracelet] = useState(null);

  useEffect(() => {
    axios
      .get(`https://vuoncotich-6.onrender.com/bracelet/${id}`)
      .then((res) => setBracelet(res.data))
      .catch((err) => console.error("Lỗi khi fetch bracelet detail:", err));
  }, [id]);

  if (!bracelet) return <p>Đang tải...</p>;

  // Gom ảnh cover + ảnh mô tả
  const images = [ ...(bracelet.descriptionImages || [])];

  return (
    <div className="bracelet-detail">
      <div className="bracelet-left">
      <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back 
        </button>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          className="bracelet-swiper"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img src={img} alt={`bracelet-${idx}`} className="bracelet-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bracelet-right">
        <h2>{bracelet.name}</h2>
        <p className="bracelet-price">{bracelet.price}</p>
        <p><strong>Chất liệu:</strong> {bracelet.description.material}</p>
        <p><strong>Kích thước:</strong> {bracelet.description.size}</p>
        {bracelet.description.colorCharm && (
    <p><strong>Màu charm:</strong> {bracelet.description.colorCharm}</p>
  )}

  {/* Chỉ hiển thị nếu có note */}
  {bracelet.description.note && (
    <p><strong>Note:</strong> {bracelet.description.note}</p>
  )}
      </div>
    </div>
  );
};

export default BraceletDetail;
