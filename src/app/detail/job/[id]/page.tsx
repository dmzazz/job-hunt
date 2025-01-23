import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface DetailJobPageProps {}

const DetailJobPage: FC<DetailJobPageProps> = ({}) => {
  return (
    <div className="bg-slate-100 px-32 pt-10 pb-14">
      <div className="infline-flex gap-2 text-sm text-muted-foreground">
        <Link className="hover:underline hover:text-black" href="/">
          Home
        </Link>{" "}
        / {""}
        <Link className="hover:underline hover:text-black" href="/find-companies">
          Companies
        </Link>{" "}
        / {""}
        <Link className="hover:underline hover:text-black" href="/detail/company/1">
          Twitter
        </Link>{" "}
        / {""}
        <Link className="hover:underline hover:text-black" href="/detail/job/1">
          Social Media Assistant
        </Link>
      </div>
      <div className="bg-white shadow mt-10 p-5 w-11/12 mx-auto flex flex-row justify-between items-center">
        <div className="infline-flex items-center gap-5">
          <Image src="/images/company2.png" alt="/images/company2.png" width={88} height={88} />
          <div>
            <div className="text-2xl font-semibold">
                Social Media Assistant
            </div>
            <div className="text-muted-">
                Agency . Paris, France . Full-Time
            </div>
          </div>
        </div>
        <Button size='lg' className="text-lg px-12 py-6">
            Apply
        </Button>
      </div>
    </div>
  );
};

export default DetailJobPage;
