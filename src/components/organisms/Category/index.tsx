"use client";

import { FC, useMemo } from "react";

import useSWR from "swr";

import TitleSection from "@/components/atoms/TitleSection";
import CategoryItem from "./CategoryItem";
import { fetcher, parsingCategories } from "@/lib/utils";
import { companyJobType } from "@/types";

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
  const { data, error, isLoading } = useSWR("/api/job/categories", fetcher);

  const categories = useMemo(() => parsingCategories(data, error, isLoading), [data, error, isLoading]);

  console.log("categories", categories);

  return (
    <div className="mt-32 mb-8">
      <TitleSection word1="Explore by" word2="category" />
      <div className="grid grid-cols-5 gap-9 mt-12">
        {categories.map((item: companyJobType) => (
          <CategoryItem key={item.id} name={item.name} totalJobs={item.totalJobs} />
        ))}
      </div>
    </div>
  );
};

export default Category;
