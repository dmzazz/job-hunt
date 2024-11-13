import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";

interface FeaturedJobsProps {}

const FeaturedJobs: FC<FeaturedJobsProps> = ({}) => {
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {[0, 1, 2, 3].map((item: number) => (
          <JobItem
            key={item}
            image="/images/company.png"
            jobType="Full Time"
            name="Email Marketing"
            type="Agency"
            location="Paris, France"
            desc="            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat fugit incidunt consequuntur, et, nemo rerum exercitationem voluptatem officiis quidem repudiandae nihil. Exercitationem, libero ducimus! Nobis autem dolor amet blanditiis!"
          categories={['Marketing', 'Design']}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
