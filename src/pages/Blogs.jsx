import React from "react";
import useTitle from "../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div
      className="my-container"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
    >
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-bold">
          Question #1: What is an access token and refresh token? How do they
          work and where should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">
            Ans: An access token and a refresh token are a commonly used systems
            that authenticates to grant and manage access to protected data`s.{" "}
            <br /> They authenticates users, gives access to their data handles
            expiration, refreshes the token and repeat the process.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-bold">
          Question #2: What is the comparison between SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">
            Ans: The main comparison between SQL and NoSQL database is that, SQL
            database follows a structured, tabular data model, where NoSQL
            database offers a flexible, schema-less data model.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-bold">
          Question #3: What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">
            Ans: Express Js is a minimalist and flexible web application
            framework for Node.js. It provides a simple and straightforward API
            for building web applications and API`s. <br />
            Nest js is a progressive, opinionated framework for building
            efficient and scalable server-side applications with Node Js. It is
            built on top of Express Js but provides a higher-level abstraction
            and additional features.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-bold">
          Question #4: What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">
            Ans: In MongoDB aggregate is a operation that is used to perform
            advanced data processing and analysis on the documents within a
            collection. It allows you to run complex queries and perform various
            transformations, aggregations, and computations on the data. <br />
            The aggregate operation in MongoDB works by defining a pipeline of
            stages that are executed sequentially on the documents. Each stage
            in the pipeline performs a specific operation on the data and passes
            the modified dataset to the next stage. The stages can include
            various operations such as filtering, grouping, projecting, sorting,
            joining, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
