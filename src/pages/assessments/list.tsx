import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import { withAuthDashboard } from "~/components/HOC/withDashboardLayout";
import Loader from "~/components/ui/atoms/Loader";
import { EnhancedTable } from "~/components/ui/organisms/EnhancedTable";
import { HeadCell } from "~/components/ui/organisms/EnhancedTable/types";
import { api } from "~/components/utils/api";

export const headCells: HeadCell[] = [
  {
    id: "id",
    align: "left",
    disablePadding: false,
    label: "ID",
    width: "min-content",
    sortable: true,
  },
  {
    id: "title",
    align: "left",
    disablePadding: false,
    label: "Name",
    width: "40%",
    sortable: true,
  },
  {
    id: "quizType",
    align: "left",
    disablePadding: false,
    label: "Type",
    sortable: true,
  },
  {
    id: "totalQuestions",
    align: "right",
    disablePadding: false,
    label: "Questions",
    sortable: true,
  },
  {
    id: "results",
    align: "right",
    disablePadding: false,
    label: "Results",
    sortable: true,
  },
  {
    id: "actions",
    align: "right",
    disablePadding: false,
    label: "Actions",
    sortable: false,
  },
];

const List = () => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(25);

  const {
    data: assessments,
    error,
    isLoading,
  } = api.assessment.list.useQuery({
    limit: perPage,
    offset: page,
  });

  const rows = assessments?.data.map(
    (assessment) =>
      ({
        id: assessment.id,
        uniqueId: assessment.id,
        title: assessment.title,
        label: assessment.quizType.label,
        totalQuestions: assessment.totalQuestions ?? 0,
        // TODO remove 0
        results: 0,
        actions: [
          {
            description: "Preview",
            icon: <Visibility />,
            action: () => {},
            link: `/assessment-attempt/${assessment.id}`,
          },
          {
            description: "Edit",
            icon: <Edit />,
            action: () => {},
            link: `/assessments/${assessment.id}`,
          },
          {
            description: "Delete",
            icon: <Delete />,
            action: () => {},
          },
        ],
      } ?? [])
  );

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <EnhancedTable
        rows={rows}
        headCells={headCells}
        tableTitle="Assessments"
        count={assessments?.total}
        page={page}
        perPage={perPage}
        handlePageChange={(newPage) => {
          setPage(newPage);
        }}
        handlePerPageChange={(newPerPage) => {
          setPerPage(newPerPage);
        }}
        rowsPerPageOptions={[25, 50, 100]}
      />
    </>
  );
};

export default withAuthDashboard(List);
