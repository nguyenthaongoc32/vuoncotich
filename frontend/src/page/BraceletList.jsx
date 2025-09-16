import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BraceletList.css";

const BraceletList = () => {
  const [bracelets, setBracelets] = useState([]);

  useEffect(() => {
    axios
      .get("https://vuoncotich-6.onrender.com/bracelet/") // thay bằng URL backend render của bạn
      .then((res) => {
        setBracelets(res.data);
      })
      .catch((err) => {
        console.error("Lỗi khi fetch bracelets:", err);
      });
  }, []);

  return (
    <div className="bracelet-container">
      {bracelets.map((bracelet) => (
        <div key={bracelet._id} className="bracelet-item">
          <img src={bracelet.coverImage} alt={bracelet.name} />
          <h3>{bracelet.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default BraceletList;
