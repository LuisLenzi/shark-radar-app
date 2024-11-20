import { z } from "zod";

export const formDashboardSchema = z.object({
  dateReference: z.string({
    required_error: "Data de referência é obrigatória",
  }),
  sharkName: z.string({
    required_error: "Nome do tubarão é obrigatório",
  }),
});
