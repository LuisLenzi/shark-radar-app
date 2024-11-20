import { z } from "zod";

export const formFaqSchema = z.object({
  filter: z.string({}),
});
