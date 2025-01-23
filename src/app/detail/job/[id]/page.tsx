import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface DetailJobPageProps {}

const DetailJobPage: FC<DetailJobPageProps> = ({}) => {
  return (
    <>
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
              <div className="text-2xl font-semibold">Social Media Assistant</div>
              <div className="text-muted-">Agency . Paris, France . Full-Time</div>
            </div>
          </div>
          <Button size="lg" className="text-lg px-12 py-6">
            Apply
          </Button>
        </div>
      </div>
      <div className="px-32 py-16 flex flex-row items-start gap-10">
        <div className="w-3/4">
          <div className="mb-16">
            <div className="text-3xl font-semibold mb-3">Description</div>
            <div className="text-muted-foreground">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime fugit et nulla! Vero maiores, dolorum omnis laudantium voluptatum nihil nulla itaque architecto autem excepturi tenetur sint quo animi beatae?</p>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-3xl font-semibold mb-3">Responsibilities</div>
            <div className="text-muted-foreground">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime fugit et nulla! Vero maiores, dolorum omnis laudantium voluptatum nihil nulla itaque architecto autem excepturi tenetur sint quo animi beatae?</p>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-3xl font-semibold mb-3">Who You Are</div>
            <div className="text-muted-foreground">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime fugit et nulla! Vero maiores, dolorum omnis laudantium voluptatum nihil nulla itaque architecto autem excepturi tenetur sint quo animi beatae?</p>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-3xl font-semibold mb-3">Nice-To-Haves</div>
            <div className="text-muted-foreground">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime fugit et nulla! Vero maiores, dolorum omnis laudantium voluptatum nihil nulla itaque architecto autem excepturi tenetur sint quo animi beatae?</p>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div>
            <div className="text-3xl font-semibold">About this role</div>

            <div className="mt-6 p-4 bg-gray-50">
              <div className="mb-2">
                <span className="font-semibold">5 Applied</span> <span className="text-gray-600">of 10 capacity</span>
              </div>
              <Progress value={50} />
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">
                  Apply Before
                </div>
                <div className="font-semibold">
                  Juli 31, 2023
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">
                  Job Posted On
                </div>
                <div className="font-semibold">
                  Juli 31, 2023
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">
                  Job Type
                </div>
                <div className="font-semibold">
                  Full-Time
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">
                  Salary
                </div>
                <div className="font-semibold">
                  $75k-$85k USD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailJobPage;
