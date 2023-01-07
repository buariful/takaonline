import React from "react";
import bannerLeftImg from "../../img/banner_left.jpg";

const VideoCard = () => {
  return (
    <div className="p-5 text-start">
      <img src={bannerLeftImg} alt="img" style={{ maxWidth: "200px" }} />
      <p className="my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quia
        doloribus
      </p>
      <button className="bg-[#1E0F12] text-white font-semibold px-6 py-1 rounded-md">
        Lecture
      </button>
    </div>
  );
};

export default VideoCard;
