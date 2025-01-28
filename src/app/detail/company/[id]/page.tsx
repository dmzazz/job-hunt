import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineFire } from "react-icons/ai";

interface DetailCompanyProps {}

const DetailCompany: FC<DetailCompanyProps> = ({}) => {
  return (
    <div>
      <div className="bg-slate-100 px-32 pt-16 pb-14">
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
          </Link>
        </div>

        <div className="mt-10 inline-flex gap-6 items-start">
          <Image src="/images/company2.png" alt="/images/company2.png" width={150} height={150} />
          <div>
            <div className="infline-flex gap-4 items-center">
              <span className="text-4xl font-semibold">Twitter</span>
              <Badge>10 Jobs</Badge>
            </div>
            <div className="mt-2">
              <Link href="/" className="font-semibold text-primary">
                https://twitter.com
              </Link>
            </div>
            <div className="inline-flex items-center gap-10 mt-6">
                <div className="inline-flex items-center gap-3">
                    <div>
                        <div className="bg-white p-3 rounded-full">
                            <AiOutlineFire className="w-6 h-6 text-primary"/>
                        </div>
                    </div>
                    <div>
                        <div className="text-gray-500">Founded</div>
                        <div className="font-semibold">March, 06 2023</div>
                    </div>
                </div>
            </div>
            <div className="inline-flex items-center gap-10 mt-6">
                <div className="inline-flex items-center gap-3">
                    <div>
                        <div className="bg-white p-3 rounded-full">
                            <AiOutlineFire className="w-6 h-6 text-primary"/>
                        </div>
                    </div>
                    <div>
                        <div className="text-gray-500">Founded</div>
                        <div className="font-semibold">March, 06 2023</div>
                    </div>
                </div>
            </div>
            <div className="inline-flex items-center gap-10 mt-6">
                <div className="inline-flex items-center gap-3">
                    <div>
                        <div className="bg-white p-3 rounded-full">
                            <AiOutlineFire className="w-6 h-6 text-primary"/>
                        </div>
                    </div>
                    <div>
                        <div className="text-gray-500">Founded</div>
                        <div className="font-semibold">March, 06 2023</div>
                    </div>
                </div>
            </div>
            <div className="inline-flex items-center gap-10 mt-6">
                <div className="inline-flex items-center gap-3">
                    <div>
                        <div className="bg-white p-3 rounded-full">
                            <AiOutlineFire className="w-6 h-6 text-primary"/>
                        </div>
                    </div>
                    <div>
                        <div className="text-gray-500">Founded</div>
                        <div className="font-semibold">March, 06 2023</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCompany;
