import Image from "next/image";
import React from "react";
import { PiArrowCircleUpRightThin } from "react-icons/pi";

const BlogPosts = () => {
  return (
    <section>
      <div className="flex grid grid-cols-3">
        <div className="flex flex-col">
          <div className="p-3 bg-[#1F1F1F] h-[455px] w-[350px] rounded-xl">
            <Image
              src="/Blog/image1.svg"
              alt="Blog Post 1"
              width={300}
              height={200}
              className="rounded-2xl w-[350px] h-[250px] object-cover"
            />
            <div className="w-[350px] h-[250px]">
              <p className="text-sm mt-4 text-[#4C8C74]">Design</p>
              <h3 className="mt-3 text-xl font-semibold text-yellow-500">
                Lorem Ipsum is simply dummy 
              </h3>
              <p className="mt-2 text-sm text-[#AAAAAA]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="flex flex-row gap-2 justify-start items-center mt-3">
                <PiArrowCircleUpRightThin className="w-6 h-6 text-[#AAAAAA]"/>
                <p className="text-sm text-[#AAAAAA]">Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
