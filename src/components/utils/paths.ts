export const paths = {
  index: "/",
  login: "/login",
  register: "/register",
  forgotPassword: "/forgot-password",
  changePassword: "/change-password",
  verifyEmail: "/verify-email",

  dashboard: {
    index: "/dashboard",
    assessments: {
      index: "/dashboard/assessments",
      create: "/dashboard/assessments/create",
      edit: "/dashboard/assessments/edit/:id",
      list: "/dashboard/assessments/list",
    },
  },

  401: "/401",
  404: "/404",
  500: "/500",
};
