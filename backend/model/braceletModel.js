
    import mongoose from "mongoose";

    const braceletSchema = new mongoose.Schema(
      {
        name: {
          type: String,
          required: true, 
        },
        price: {
          type: String,
          required: true, // giá
        },
    
        // 📌 Ảnh bìa (cover)
        coverImage: {
          type: String,
          required: true,
        },
    
        // 📌 Ảnh mô tả (có thể nhiều ảnh)
        descriptionImages: [
          {
            type: String,
          },
        ],
    
        // 📌 Phần mô tả chi tiết
        description: {
          size: {
            type: String, // kích thước (S, M, L… hoặc số cm)
            required: true,
          },
          material: {
            type: String, // chất liệu (vàng, bạc, đá…)
            required: true,
          },
          colorCharm: {
            type: String, 
            required: true,
          },
          note: {
            type: String, // mô tả thêm (tùy chọn)
          },
        },
    
      },
      { timestamps: true }
    );

const Bracelet = mongoose.model("Bracelet", braceletSchema);

export default Bracelet;
