import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={imageUrl ? imageUrl : ""}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <span className="badge rounded-pill bg-warning"> {source} </span>
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-danger"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
