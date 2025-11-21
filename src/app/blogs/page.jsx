import React from "react";
import Image from "next/image";
import { fetchArticles } from "@/utils/api";
import Link from "next/link";
import Button from "@/component/Button";

const page = async () => {
  const articles = await fetchArticles();

  return (
    <div>
      <header
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.90) 5.68%, rgba(0, 0, 0, 0.31) 79.4%, rgba(255, 255, 255, 1) 100%)`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="pt-[187px] relative md:pt-[238px] pb-[50px] lg:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full relative z-10  mx-auto text-center">
          <h1 className="font-medium tracking-[-4%] leading-[120%] text-5xl  lg:text-[68px] text-[#FCFCFD]">
            Blogs
          </h1>
          <p className="text-[#FCFCFD] text-left lg:text-center mx-auto  mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-full lg:w-[70%] font-normal text-base md:text-lg">
            Explore actionable strategies, expert insights, and practical guides
            to transform your workplace dynamics.
          </p>
        </div>
      </header>

      {/* Blogs */}

      <section className="px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles?.data?.map((item, idx) => {
            const blogUrl = `/blogs/${
              item?.slug ?? item?.attributes?.slug ?? item?.id
            }`;
            return (
              <Link
                key={idx}
                href={`/blogs/${
                  item?.attributes?.slug || item?.slug || item?.id
                }`}
                className="block group"
              >
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
      </section>
    </div>
  );
};

export default page;
