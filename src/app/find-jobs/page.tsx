"use client"

import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { filterFormType } from "@/types";
import { CATEGORIES_option } from "@/contants";

const FILTER_FORMS: filterFormType[] = [
  {
    name: 'categories',
    label: 'Categories',
    items: CATEGORIES_option
  }
]

export default function FindJobsPage() {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: []
    }
  });

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => console.log(val);

  return <ExploreDataContainer formFilter={formFilter} onSubmitFilter={onSubmitFormFilter} filterForms={FILTER_FORMS}/>;
}
