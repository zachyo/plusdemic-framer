import React from "react";

const Card = ({ tag }) => {
  return (
    <div className="p-6 bg-white rounded-lg border-[1px] border-gray-300 text-center py-12">
      <div className="bg-brandWhite p-4 rounded-full overflow-clip w-fit mx-auto">
        <img src={tag.icon} alt="" className="w-24" />
      </div>
      <p className="my-4 text-lg font-bold">{tag.heading}</p>
      <p className="text-gray-400 text-sm">{tag.text}</p>
    </div>
  );
};

export default Card;
