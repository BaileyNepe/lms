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
}: {
  headCells: { [key: string]: any }[];
  rows?: Data[];
  tableTitle?: string;
  create?: {
    title: string;
    onClick: () => void;
  };
}) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("title");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const navigate = useRouter();

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 25));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (rows?.length ?? 0)) : 0;

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
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
          count={rows?.length ?? 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};
