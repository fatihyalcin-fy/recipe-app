import React from "react";

export const Home = () => {
  return (
    <div
      className="container-fluid vh-100"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/cute-kitchen-utensils-doodle-sticker-set_53876-99856.jpg?t=st=1649106898~exp=1649107498~hmac=9d305d619b61bc2abad67131ea46bcce6b3aeb88762e2d45ee12731876f88b03&w=740")`,
      }}
    >
      <h1 className="text-center pt-5 ">Eat Good Feel Good</h1>
      <div className="d-flex justify-content-center mt-5">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div>
        <div className="text-center">
          <img
            src="https://img.freepik.com/free-photo/handsome-chef-showing-menu_329181-706.jpg?t=st=1649107193~exp=1649107793~hmac=8407926df1b880198c23902e13cb8a075ac113a6d37c8c1e1dc2f5d4de9dc7fa&w=740"
            className="rounded img-thumbnail w-25 mt-5 shadow-lg p-3 mb-5 bg-white rounded"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
