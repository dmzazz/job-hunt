"use client";

import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";
import useFeaturedJobs from "@/hooks/useFeaturedJobs";
import { JobType } from "@/types";

interface LatestJobsProps {}

const LatestJobs: FC<LatestJobsProps> = ({}) => {
  const { jobs, error, isLoading } = useFeaturedJobs();
  return (
    <div className="py-16 mt-32 mb-10 relative">
      <TitleSection word1="Latest" word2="jobs open" />

      <div className="mt-12 grid lg:grid-cols-3 gap-8">
        {jobs.length > 0 ? (
          jobs.map((item: JobType) => <JobItem key={item.id} {...item} />)
        ) : (
          <>
            <p>No jobs open</p>
          </>
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
