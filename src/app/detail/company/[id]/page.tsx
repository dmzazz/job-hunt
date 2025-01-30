import { Badge } from "@/components/ui/badge";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { HiOutlineLocationMarker, HiOutlineOfficeBuilding } from "react-icons/hi";

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
                    <AiOutlineFire className="w-6 h-6 text-primary" />
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
                    <BsPeopleFill className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">Employees</div>
                  <div className="font-semibold">151 / 200</div>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-10 mt-6">
              <div className="inline-flex items-center gap-3">
                <div>
                  <div className="bg-white p-3 rounded-full">
                    <HiOutlineLocationMarker className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">Location</div>
                  <div className="font-semibold">Indonesia</div>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-10 mt-6">
              <div className="inline-flex items-center gap-3">
                <div>
                  <div className="bg-white p-3 rounded-full">
                    <HiOutlineOfficeBuilding className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">Industry</div>
                  <div className="font-semibold">Advertising</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-32 py-12 flex flex-row items-start gap-10">
        <div className="w-3/4">
          <div className="mb-16">
            <div className="text-3xl font-semibold mb-3">Company Profile</div>
            <div className="text-muted-foreground">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime fugit et nulla! Vero maiores, dolorum omnis laudantium voluptatum nihil nulla itaque architecto autem excepturi tenetur sint quo animi beatae?</p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold mb-4">
              Contact
            </div>
            <div className="flex items-center gap-5 w-[400px] flex-wrap">
              <div className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold">
                <FacebookIcon/>
                <span className="text-sm">https://facebook.com/twitter</span>
              </div>
              <div className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold">
                <TwitterIcon/>
                <span className="text-sm">https://twitter.com/twitter</span>
              </div>
              <div className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold">
                <LinkedinIcon/>
                <span className="text-sm">https://linkedin.com/twitter</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="text-3xl font-semibold mb-4">
            Tech Stack
          </div>
          <div className="text-gray-500 text-sm">
            Learn about the technology and tools that pattern uses.
          </div>
          <div className="mt-5 inline-flex gap-4">
            <Badge>Javascript</Badge>
            <Badge>HTML</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCompany;
