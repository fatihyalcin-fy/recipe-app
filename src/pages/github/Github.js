import React from "react";

export const Github = () => {
  return (
    <div
      className="container-fluid vh-100"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/businessman-pointing-his-presentation-futuristic-digital-screen_53876-102617.jpg?t=st=1649111706~exp=1649112306~hmac=a241f90017ca7038796bbcfa2d00fb1cca417cea7c31b987f627145ab1948f1f&w=900")`,
      }}
    >
      <h1 className="text-center pt-5 ">Contact Me!</h1>
      <div>
        <div className="text-center">
          <img
            src="https://img.freepik.com/free-photo/contact-us-customer-support-hotline-people-connect-call-customer-support_36325-1640.jpg?w=900"
            className="rounded w-25 mt-5 shadow-lg p-3 mb-5 bg-white rounded"
            alt="..."
          />
        </div>
        <div className="col text-center">
          <p className="text-center p-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab magnam,
            unde quo dolores obcaecati, commodi consequuntur quia cupiditate
            adipisci reiciendis rerum officiis corporis, cum dolore quis. Fugiat
            magnam ad placeat.
          </p>
          <button type="button" className="btn btn-outline-success text-center">
            <a href="https://github.com/fatihyalcin-fy" target="_blank">
              <i className="bi bi-github margin-left-2">GitHub</i>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Github;
