import { Delete, Edit, Visibility } from "@mui/icons-material";
import { useState } from "react";
import { withAuthDashboard } from "~/components/HOC/withDashboardLayout";
import Loader from "~/components/ui/atoms/Loader";
import { EnhancedTable } from "~/components/ui/organisms/EnhancedTable";
import { type HeadCell } from "~/components/ui/organisms/EnhancedTable/types";
import { api } from "~/components/utils/api";
import { paths } from "~/components/utils/paths";

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
  const utils = api.useContext();
  const { data: assessments, isLoading } = api.assessment.list.useQuery({
    limit: perPage,
    offset: page,
  });
  const { mutate: deleteAssessment } = api.assessment.delete.useMutation({
    onSettled: () => utils.assessment.list.invalidate(),
  });

  const rows = assessments?.data.map((assessment) => ({
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
        link: paths.assessments.preview.attempt(assessment.id),
      },
      {
        description: "Edit",
        icon: <Edit />,
        action: () => {},
        link: paths.assessments.edit(assessment.id),
      },
      {
        description: "Delete",
        icon: <Delete />,
        action: () => deleteAssessment(assessment.id),
      },
    ],
  }));

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
      />
    </>
  );
};

export default withAuthDashboard(List);
