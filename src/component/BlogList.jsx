"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogList({ articles }) {
  const [visible, setVisible] = useState(9); // show 9 initially

  const showMore = () => {
    setVisible((prev) => prev + 9); // load 9 at a time
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, visible).map((item, idx) => {
          const blogUrl = `/blogs/${
            item?.attributes?.slug || item?.slug || item?.id
          }`;

          return (
            <Link key={idx} href={blogUrl} className="block group">
              <div className="pb-8 mb-[35px] overflow-hidden cursor-pointer">
                <Image
                  alt={item.name || "Cover"}
                  width={200}
                  height={200}
                  src={item?.cover?.url || null}
                  className="h-[300px] object-cover w-full group-hover:scale-[1.02] transition duration-300"
                />

                <div className="mt-8 px-6">
                  <p className="text-secondary font-normal text-sm">
                    {new Date(item.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>

                  <h3
                    title={item.title}
                    className="text-[#18181B] font-medium text-2xl mt-3 group-hover:underline"
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Load More Button */}
      {visible < articles.length && (
        <div className="text-center mt-10">
          <button
            onClick={showMore}
            className="px-8 py-3 inline-block bg-black text-white text-base font-medium rounded hover:bg-transparent hover:text-black border border-black transition"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}
