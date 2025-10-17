/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#0b7ce2"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }
  if (!user) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You need to log in first!',
    })
    return <Navigate to="/login" replace={true} state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
