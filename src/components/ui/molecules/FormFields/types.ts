import { z } from "zod";

export const configSchema = z.object({
  title: z.string(),
  fields: z.array(
    z.object({
      name: z.string(),
      label: z.string(),
      type: z.union([
        z.literal("text"),
        z.literal("select"),
        z.literal("checkbox"),
        z.literal("radio"),
      ]),
      required: z.boolean(),
      helperText: z.string().optional(),
      options: z
        .array(
          z.object({
            value: z.string(),
            label: z.string(),
          })
        )
        .optional(),
    })
  ),
});

export type ConfigType = z.infer<typeof configSchema>;
