"use client";

import { FC, useMemo } from "react";

import useSWR from "swr";

import TitleSection from "@/components/atoms/TitleSection";
import CategoryItem from "./CategoryItem";
import { fetcher, parsingCategories } from "@/lib/utils";
import { categoryJobType } from "@/types";

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
  const { data, error, isLoading } = useSWR("/api/jobs/categories", fetcher);

  const categories = useMemo(() => parsingCategories(data, error, isLoading), [data, error, isLoading]);

  return (
    <div className="mt-32 mb-8">
      <TitleSection word1="Explore by" word2="category" />
      <div className="grid lg:grid-cols-5 gap-9 mt-12">
        {categories.length > 0 ? categories.map((item: categoryJobType) => (
          <CategoryItem key={item.id} name={item.name} totalJobs={item.totalJobs} />
        )) : (
          <>
          <p>No jobs open</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Category;
