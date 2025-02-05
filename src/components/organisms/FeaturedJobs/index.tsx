"use client";

import TitleSection from "@/components/atoms/TitleSection";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import JobItem from "./JobItem";
import useSWR from "swr";
import { fetcher, parsingJobs } from "@/lib/utils";
import { JobType } from "@/types";

interface FeaturedJobsProps {}

const FeaturedJobs: FC<FeaturedJobsProps> = ({}) => {
  const { data, error, isLoading } = useSWR("/api/jobs/featured", fetcher);

  const [jobs, setJobs] = useState<JobType[]>([]);

  const parseJobs = useCallback(async () => {
    const parseData = await parsingJobs(data, error, isLoading);
    setJobs(parseData);
  }, [data, error, isLoading]);

  // const jobs = useMemo(() => parsingJobs(data, error, isLoading), [data, error, isLoading]);

  useEffect(() => {
    parseJobs();
  }, [data, error, isLoading]);

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
