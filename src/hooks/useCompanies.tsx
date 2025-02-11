import { fetcher, parsingCompanies } from "@/lib/utils";
import { JobType } from "@/types";
import { useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";

const COMPANY_PATH = "/api/company/filter";

const useCompanies = (filter?: string[]) => {
  const paramsCategory = useMemo(() => {
    if (filter && filter.length > 0) {
      return filter.join(",");
    }

    return "";
  }, [filter]);

  const { data, error, isLoading, mutate } = useSWR(`${COMPANY_PATH}?category=${paramsCategory}`, fetcher, {revalidateOnMount: false});

  const [companies, setCompanies] = useState<JobType[]>([]);

  const parseJobs = useCallback(async () => {
    const parseData = await parsingCompanies(data, error, isLoading);
    setCompanies(parseData);
  }, [data, isLoading, error]);

  useEffect(() => {
    parseJobs();
  }, [data, error, isLoading]);

  return { companies, isLoading, mutate };
};

export default useCompanies;
