import { z } from "zod";

export type Order = "asc" | "desc";

export const ActionSchema = z.object({
  action: z.function(z.tuple([]), z.void()).optional(),
  link: z.string().optional(),
  icon: z.any(),
  description: z.string(),
});

export const ActionsSchema = z.array(ActionSchema);

export type Action = z.infer<typeof ActionSchema>;

export type Data = {
  id: string;
  title: string;
  label: string;
  actions: Action[];
  [key: string]: string | number | Action[];
};

export interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  order: Order;
  orderBy: string | number;
  rowCount: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headCells: { [key: string]: any }[];
}

export interface EnhancedTableToolbarProps {
  tableTitle?: string;
  create?: {
    title: string;
    onClick: () => void;
  };
}

const headCellSchema = z.object({
  disablePadding: z.boolean(),
  id: z.string(),
  label: z.string(),
  align: z
    .union([z.literal("left"), z.literal("right"), z.literal("center")])
    .optional(),
  width: z.string().optional(),
  sortable: z.boolean().optional(),
});

export type HeadCell = z.infer<typeof headCellSchema>;
