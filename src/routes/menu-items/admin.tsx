// assets
import SchoolIcon from '@mui/icons-material/School';

const admin = {
  id: 'admin',
  title: 'Admin Dashboard',
  caption: 'Manage your Courses and Students',
  type: 'group',
  children: [
    {
      id: 'Learning Management System',
      title: 'Manage Learning Products',
      type: 'collapse',
      icon: SchoolIcon,
      children: [
        {
          id: 'Courses',
          title: 'Courses',
          type: 'item',
          url: '/courses',
          target: false
        },
        {
          id: 'Assessments',
          title: 'Assessments',
          type: 'item',
          url: '/assessments',
          target: false
        }
      ]
    },
    {
      id: 'Reports',
      title: 'Reports',
      type: 'collapse',
      icon: SchoolIcon,
      children: [
        {
          id: 'Course-Reports',
          title: 'Course Reports',
          type: 'item',
          url: '/reports/courses',
          target: false
        },
        {
          id: 'Assessment-Reports',
          title: 'Assessment Reports',
          type: 'item',
          url: '/reports/assessments',
          target: false
        },
        {
          id: 'Student-Reports',
          title: 'Student Reports',
          type: 'item',
          url: '/reports/students',
          target: false
        },
        {
          id: 'Group-Reports',
          title: 'Group Reports',
          type: 'item',
          url: '/reports/groups',
          target: false
        },
        {
          id: 'Financial-Reports',
          title: 'Financial Reports',
          type: 'collapse',
          children: [
            {
              id: 'Financial-Reports-List',
              title: 'List',
              type: 'item',
              url: '/reports/financial',
              target: false
            },
            {
              id: 'Revenue-Reports',
              title: 'Revenue Reports',
              type: 'item',
              url: '/reports/financial/revenue',
              target: false
            },
            {
              id: 'Order-Reports',
              title: 'Order Reports',
              type: 'item',
              url: '/reports/financial/orders',
              target: false
            }
          ]
        }
      ]
    },
    {
      id: 'Student Management System',
      title: 'Manage Students',
      type: 'collapse',
      icon: SchoolIcon,
      children: [
        {
          id: 'Students',
          title: 'Users',
          type: 'item',
          url: '/users',
          target: false
        },
        {
          id: 'Student-Groups',
          title: 'Groups',
          type: 'item',
          url: '/groups',
          target: false
        },
        {
          id: 'Student-Enrollments',
          title: 'Enrollments',
          type: 'item',
          url: '/enrollments',
          target: false
        },
        {
          id: 'Student-Submissions',
          title: 'Submissions',
          type: 'item',
          url: '/submissions',
          target: false
        },
        {
          id: 'Student-Grades',
          title: 'Grades',
          type: 'item',
          url: '/grades',
          target: false
        },
        {
          id: 'Student-Reports',
          title: 'Reports',
          type: 'item',
          url: '/reports',
          target: false
        },
        {
          id: 'Student-Settings',
          title: 'Settings',
          type: 'item',
          url: '/settings',
          target: false
        },
        {
          id: 'Student-Notifications',
          title: 'Notifications',
          type: 'item',
          url: '/notifications',
          target: false
        },
        {
          id: 'Student-Logs',
          title: 'Logs',
          type: 'item',
          url: '/logs',
          target: false
        },
        {
          id: 'Student-Progress',
          title: 'Progress',
          type: 'item',
          url: '/progress',
          target: false
        }
      ]
    }
  ]
};

export default admin;
