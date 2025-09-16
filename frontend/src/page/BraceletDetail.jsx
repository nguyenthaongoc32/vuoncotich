import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./BraceletDetail.css";

const BraceletDetail = () => {
  const { id } = useParams();
  const [bracelet, setBracelet] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    axios
      .get(`https://vuoncotich-6.onrender.com/bracelet/${id}`)
      .then((res) => setBracelet(res.data))
      .catch((err) => console.error("Lỗi khi fetch bracelet detail:", err));
  }, [id]);

  if (!bracelet) return <p>Đang tải...</p>;

  return (
    <div className="detail-container">
      {/* Cột bên trái: Ảnh */}
      <div className="image-section">
        {/* Swiper chính */}
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={10}
          slidesPerView={1}
          className="main-swiper"
        >
          {bracelet?.descriptionImages?.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img src={img} alt={`img-${idx}`} className="main-image" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress
          className="thumb-swiper"
        >
          {bracelet?.descriptionImages?.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img src={img} alt={`thumb-${idx}`} className="thumb-image" />
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
