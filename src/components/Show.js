import React from "react";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";
export default function Show() {
  const show = useSelector((state) => state.show.data);

  return (
    <div className="show">
      <div className="show_img_div">
        <img
          className="show_img"
          src={show.image.original}
          alt={show.image.name}
        />
      </div>
      <div className="show_desc">
        <h1 className="title">{show.name}</h1>
        <p
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(show.summary) }}
        ></p>
      </div>
    </div>
  );
}
