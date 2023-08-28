import React from "react";
import PageHeader from "./PageHeader";

const BlogArticle = ({
  title,
  content,
  header,
  description,
  subHeading,
  subContent,
  titleColor,
}) => {
  return (
    <div>
      <PageHeader header={header} description={description} />
      <div className="section">
        <div className="container">
          <article>
            <h1 className="heading" style={{ color: titleColor || "#3063e8" }}>
              {title}
            </h1>
            <hr />
            {/* One for the first chunk of text after the headline */}
            {content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {/* If an article has an additional subtitle, continue with these */}
            {subHeading && <h4 style={{ fontWeight: "bold" }}>{subHeading}</h4>}{" "}
            <hr />
            {subContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
