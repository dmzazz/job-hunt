"use client"

import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function FindJobsPage() {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema)
  });

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => console.log(val);

  return <ExploreDataContainer formFilter={formFilter} onSubmitFilter={onSubmitFormFilter} />;
}
