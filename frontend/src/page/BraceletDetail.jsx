import React, { useState, useEffect } from "react";
import "./BraceletDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";

// 👉 Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BraceletDetail = () => {
  const { id } = useParams();
  const [bracelet, setBracelet] = useState(null);

  useEffect(() => {
    axios
      .get(`https://vuoncotich-6.onrender.com/bracelet/${id}`)
      .then((res) => setBracelet(res.data))
      .catch((err) => console.error("Lỗi khi fetch bracelet detail:", err));
  }, [id]);

  if (!bracelet) return <p>Đang tải...</p>;

  return (
    <div className="bracelet-detail">
        {/* 👉 Slide ảnh mô tả */}
      <div className="bracelet-slider">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
        >
          {bracelet.descriptionImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img src={img} alt={`desc-${idx}`} style={{ width: "100%", borderRadius: "10px" }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h2>{bracelet.name}</h2>
      <p>Giá: {bracelet.price}</p>
      <p>Chất liệu: {bracelet.description.material}</p>
      <p>Kích thước: {bracelet.description.size}</p>
      <p>Màu charm: {bracelet.description.colorCharm}</p>
      {bracelet.description.note && <p>Ghi chú: {bracelet.description.note}</p>}

      
    </div>
  );
};

export default BraceletDetail;
