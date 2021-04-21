import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos row">
        {props.photos.map((photo, index) => {
          return (
            <section key={index}>
              <div className="col-4">
                <a href={photo.src.original} rel="noreferrer" target="_blank">
                  <img
                    src={photo.src.landscape}
                    alt={props.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
