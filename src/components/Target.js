import React from "react";
function Target({ target }) {
  let { name, image, id } = target;
  return (
    <div className="bg-green-200 w-72 h-82 p-4 m-5 rounded-xl cursor-pointer">
      <img className="w-64 h-54" src={image} alt="" />
      <div className="h-full mt-3">
        <h2 className="text-lg text-center m-1">{name}</h2>
        <p className="text-lg text-center">#{id}</p>
      </div>
    </div>
  );
}
export default Target;
