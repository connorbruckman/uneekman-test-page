import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ imgSrc, date, title, content, readMoreLink }) => {
  return (
    <div
      className="col-md-6 col-lg-4 mb-4"
      data-aos="fade-up"
      data-aos-delay="0"
    >
      <div className="card post-entry shadow">
        <a href={readMoreLink}>
          <img src={imgSrc} className="card-img-top" alt="Image" />
        </a>
        <div className="card-body">
          <div>
            <span className="text-uppercase font-weight-bold date">{date}</span>
          </div>
          <h5 className="card-title" style={{ zIndex: "100" }}>
            <a>
              <Link to={readMoreLink}>{title}</Link>
            </a>
          </h5>
          <p className="card-content">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
