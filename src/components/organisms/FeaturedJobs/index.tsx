"use client";

import TitleSection from "@/components/atoms/TitleSection";
import useFeaturedJobs from "@/hooks/useFeaturedJobs";
import { JobType } from "@/types";
import { FC } from "react";
import JobItem from "./JobItem";

interface FeaturedJobsProps {}

const FeaturedJobs: FC<FeaturedJobsProps> = ({}) => {
  const { jobs, error, isLoading } = useFeaturedJobs();

  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {jobs.map((item: JobType) => (
          <JobItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
