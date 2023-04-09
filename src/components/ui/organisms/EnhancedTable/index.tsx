import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useRouter } from "next/router";

import { Suspense, useState } from "react";

import Loader from "~/components/ui/atoms/Loader";
import MenuPopup from "~/components/ui/molecules/MenuPopup";
import { isNumber } from "~/components/utils/sorter";
import { EnhancedTableHead } from "./header";
import { EnhancedTableToolbar } from "./toolbar";
import { ActionsSchema, Data, Order } from "./types";

export const EnhancedTable = ({
  rows,
  headCells,
  tableTitle,
  create,
  page = 0,
  perPage = 25,
  handlePageChange,
  handlePerPageChange,
  count = 0,
}: {
  headCells: { [key: string]: any }[];
  page: number;
  perPage: number;
  handlePageChange: (page: number) => void;
  handlePerPageChange: (perPage: number) => void;
  rows?: Data[];
  tableTitle?: string;
  count?: number;
  create?: {
    title: string;
    onClick: () => void;
  };
}) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("title");

  const navigate = useRouter();

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handlePerPageChange(event.target.valueAsNumber);
    handlePageChange(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * perPage - (rows?.length ?? 0)) : 0;

  return (
    <Box>
      <Paper>
        <EnhancedTableToolbar tableTitle={tableTitle} create={create} />
        <TableContainer>
          <Table>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows?.length ?? 0}
              headCells={headCells}
            />
            <TableBody>
              {rows
                ?.slice(page * perPage, page * perPage + perPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-${index}`;

                  return (
                    <TableRow hover key={row.id}>
                      <>
                        {Object.keys(row)
                          .filter((key) => key !== "uniqueId")
                          .map((key) => {
                            if (
                              typeof row[key] === "string" ||
                              typeof row[key] === "number"
                            ) {
                              return (
                                <TableCell
                                  key={key}
                                  component="td"
                                  id={labelId}
                                  scope="row"
                                  align={
                                    isNumber(row[key] as number | string)
                                      ? "right"
                                      : "left"
                                  }
                                >
                                  {row[key] as string | number}
                                </TableCell>
                              );
                            }

                            if (key === "actions" && Array.isArray(row[key])) {
                              const actions = ActionsSchema.parse(row[key]);

                              const newActions = actions.map((action) => {
                                if (
                                  action?.link &&
                                  typeof action.link === "string"
                                ) {
                                  action.action = () => {
                                    if (action.link) navigate.push(action.link);
                                  };
                                }

                                return {
                                  description: action.description,
                                  icon: action.icon as JSX.Element,
                                  action: action.action ?? (() => {}),
                                };
                              });

                              return (
                                <TableCell
                                  key={key}
                                  component="td"
                                  id={labelId}
                                  scope="row"
                                  align="right"
                                >
                                  <Suspense fallback={<Loader />}>
                                    <MenuPopup actions={newActions} />
                                  </Suspense>
                                </TableCell>
                              );
                            }

                            return null;
                          })}
                      </>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[25, 50, 100]}
          component="div"
          count={count}
          rowsPerPage={perPage}
          page={page}
          onPageChange={(_, page) => handlePageChange(page)}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};
