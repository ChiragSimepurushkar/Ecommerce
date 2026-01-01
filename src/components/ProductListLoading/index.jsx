import React from "react";

const ProductListLoading = () => {
  return (
    <div className="contents animate-pulse !pl-8 !mt-4 py-5">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-6 bg-white rounded-md shadow-sm p-4"
        >
          {/* Image */}
          <div className="w-[25%] h-[180px] bg-gray-300 rounded-md flex items-center justify-center">
            <svg
              className="!w-20 !h-35 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" rx="4" />
            </svg>
          </div>

          {/* Content */}
          <div className="w-[75%] space-y-3 !mt-4">
            <div className="!mt-4 h-3 bg-gray-300 rounded w-1/3"></div>
            <div className="!mt-4 h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="!mt-4 h-3 bg-gray-300 rounded w-full"></div>

            {/* Rating */}
            <div className="flex gap-1 !mt-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-gray-300 rounded"></div>
              ))}
            </div>

            {/* Price */}
            <div className="flex gap-4 !mt-4">
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
            </div>

            {/* Button */}
            <div className="!mt-4 h-9 w-32 bg-gray-300 rounded-md "></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListLoading;
