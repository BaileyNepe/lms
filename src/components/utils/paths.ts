export const paths = {
  index: '/',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  changePassword: '/change-password',
  verifyEmail: '/verify-email',

  dashboard: {
    index: '/dashboard',
  },
  assessments: {
    index: '/assessments',
    create: '/assessments/create',
    // :id is a placeholder for the assessment id
    edit: (id: string) => `/assessments/${id}/edit`,
    list: '/assessments/list',
    preview: {
      attempt: (id: string) => `/assessments/preview/${id}/attempt`,
    },
  },

  401: '/401',
  404: '/404',
  500: '/500',
};
