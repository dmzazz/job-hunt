import { z } from "zod";

export const formFilterSchema = z.object({
  categories: z.array(z.string()),
});

export const formFilterCompaniesSchema = z.object({
  industry: z.array(z.string()),
});
