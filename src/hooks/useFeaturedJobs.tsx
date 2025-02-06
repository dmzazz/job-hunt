import { fetcher, parsingJobs } from "@/lib/utils";
import { JobType } from "@/types";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

const useFeaturedJobs = () => {

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

    return {
        jobs, error, isLoading
    }
}

export default useFeaturedJobs