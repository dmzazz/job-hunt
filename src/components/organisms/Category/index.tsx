import React, { FC } from "react";

import { BiCategory } from "react-icons/bi";

import TitleSection from "@/components/atoms/TitleSection";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import CategoryItem from "./CategoryItem";

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
  return (
    <div className="mt-32 mb-8">
      <TitleSection word1="Explore by" word2="category" />
      <div className="grid grid-cols-5 gap-9 mt-12">
        {[0, 1, 2, 3].map((item: number) => (
          <CategoryItem key={item} name="Category" totalJobs={100}/>
        ))}
      </div>
    </div>
  );
};

export default Category;
