import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="container-fluid vh-100 image">
      <h1 className="text-center pt-5 ">Eat About Feel Good</h1>
      <div className="text-center">
        <img
          src="https://img.freepik.com/free-photo/front-view-chef-sprinkled-flour-raw-fish-slices-cutting-board-vegetables-wood-serving-board-knife-kitchen-table_179666-44301.jpg?w=900"
          className="rounded w-25 shadow-lg p-3 bg-white rounded"
          alt="..."
        />
      </div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card">
                <div className="card-body p-5">
                  <div className="text-center mb-4 pb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-quotes/bulb.webp"
                      alt="Bulb"
                      width="100"
                    />
                  </div>

                  <figure className="text-center mb-0">
                    <blockquote className="blockquote">
                      <p className="pb-3">
                        <i className="fas fa-quote-left fa-xs text-primary"></i>
                        <span className="lead font-italic">
                          Many of life's failures are people who did not realize
                          how close they were to success when they gave up.
                        </span>
                        <i className="fas fa-quote-right fa-xs text-primary"></i>
                      </p>
                    </blockquote>
                    <figcaption className="blockquote-footer mb-0">
                      Thomas Edison
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
