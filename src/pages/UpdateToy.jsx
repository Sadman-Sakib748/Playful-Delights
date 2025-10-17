/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";

const UpdateToy = (props) => {
  const { user } = useContext(AuthContext);

  const { handleToyUpdate } = props;

  const { register, handleSubmit } = useForm();

  return (
    <>
      <input type="checkbox" id={props.ownToy._id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-11/12 max-w-5xl">
          <label
            htmlFor={props.ownToy._id}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="my-container">
            <form
              className="grid grid-cols-2 gap-12 justify-center items-center"
              onSubmit={handleSubmit(handleToyUpdate)}
            >
              <input
                className="h-10 rounded-lg input-bordered input-accent p-6"
                placeholder="Toy Name"
                defaultValue={props?.ownToy?.toyName}
                {...register("toyName", { required: true })}
              />
              <input
                className="h-10 rounded-lg input-bordered input-accent p-6"
                placeholder="Picture URL"
                defaultValue={props?.ownToy?.toyPictureUrl}
                {...register("toyPictureUrl", { required: true })}
              />

              <input
                className="h-10 rounded-lg input-bordered input-accent p-6"
                {...register("sellerName")}
                value={user?.displayName}
              />
              <input
                className="h-10 rounded-lg input-bordered input-accent p-6"
                {...register("sellerEmail")}
                value={user?.email}
              />
              <input
                className="h-10 rounded-lg input-bordered input-accent p-6"
                placeholder="Price"
                defaultValue={props?.ownToy?.price}
                {...register("price", { required: true })}
              />
              <input
                className="h-10 rounded-lg input-bordered input-accent p-6"
                placeholder="Rating"
                defaultValue={props?.ownToy?.rating}
                {...register("rating", { required: true })}
              />
              <input
                className="h-10 rounded-lg input-bordered input-accent p-6 hidden"
                placeholder="Id"
                defaultValue={props?.ownToy?._id}
                {...register("_id", { required: true })}
              />
              <input
                className="h-10 rounded-lg input-bordered input-accent p-6"
                placeholder="Available Quantity"
                defaultValue={props?.ownToy?.availableQuantity}
                {...register("availableQuantity", { required: true })}
              />
              <textarea
                className="rounded-lg textarea textarea-bordered textarea-warning p-6"
                placeholder="Description"
                defaultValue={props?.ownToy?.description}
                {...register("description", { required: true })}
              />
              <input
                value="Update Toy"
                className="btn-primary text-center"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateToy;
