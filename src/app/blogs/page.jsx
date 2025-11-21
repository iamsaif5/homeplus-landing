import React from "react";
import Image from "next/image";
import { fetchArticles } from "@/utils/api";
import Link from "next/link";
import Button from "@/component/Button";
import Simplify from "@/component/Home/Simplify";
import BlogList from "@/component/BlogList";

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
        <BlogList articles={articles?.data || []} />
      </section>

      {/* CTA add */}
      <section className="w-full px-2 lg:px-10 pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <Simplify />
        </div>
      </section>
    </div>
  );
};

export default page;
