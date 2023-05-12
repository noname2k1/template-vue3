import { v4 as uuid } from 'uuid';

const sidebarList = [
  {
    id: uuid(),
    name: 'Dashboard',
    icon: '/images/icons/home.svg',
    haveImage: true,
    link: '/dashboard',
    children: [
      {
        id: uuid(),
        name: 'sales',
        link: '/dashboard/sales',
      },
      {
        id: uuid(),
        name: 'analytics',
        link: '/dashboard/analytics',
      },
    ],
  },
  {
    id: uuid(),
    name: 'Apps',
    icon: '/images/icons/cpu.svg',
    haveImage: true,
    link: '/apps',
    children: [
      {
        id: uuid(),
        name: 'chat',
        link: '/apps/chat',
      },
      {
        id: uuid(),
        name: 'mailBox',
        link: '/apps/mail-box',
      },
      {
        id: uuid(),
        name: 'todo list',
        link: '/apps/todo',
      },
      {
        id: uuid(),
        name: 'notes',
        link: '/apps/notes',
      },
      {
        id: uuid(),
        name: 'scrumboard',
        link: '/apps/scrumboard',
      },
      {
        id: uuid(),
        name: 'contacts',
        link: '/apps/contacts',
      },
      {
        id: uuid(),
        name: 'invoice',
        children: [
          {
            id: uuid(),
            name: 'list',
            link: '/apps/invoice/list',
          },
          {
            id: uuid(),
            name: 'preview',
            link: '/apps/invoice/preview',
          },
          {
            id: uuid(),
            name: 'add',
            link: '/apps/invoice/add',
          },
          {
            id: uuid(),
            name: 'edit',
            link: '/apps/invoice/edit',
          },
        ],
      },
      {
        id: uuid(),
        name: 'calendar',
        link: '/apps/calendar',
      },
    ],
  },
  {
    id: uuid(),
    name: 'components',
    icon: '/images/icons/box.svg',
    haveImage: true,
    link: '/pages',
    children: [
      {
        id: uuid(),
        name: 'tabs',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'accordions',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'modals',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'cards',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'carosels',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'countdown',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'counter',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'sweey alerts',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'timeline',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'notifications',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'media object',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'list group',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'pricing tables',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'lightbox',
        link: '/pages',
      },
    ],
  },
  {
    id: uuid(),
    name: 'elements',
    icon: '/images/icons/zap.svg',
    haveImage: true,
    link: '/pages',
    children: [
      {
        id: uuid(),
        name: 'alerts',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'avatars',
        link: '/pages',
      },
    ],
  },
  {
    id: uuid(),
    name: 'font icons',
    icon: '/images/icons/target.svg',
    haveImage: true,
    link: '/pages',
  },
  {
    id: uuid(),
    name: 'widgets',
    icon: '/images/icons/airplay.svg',
    haveImage: true,
    link: '/pages',
  },
  {
    id: uuid(),
    name: 'tables',
    icon: '/images/icons/layout.svg',
    haveImage: true,
    link: '/pages',
  },
  {
    id: uuid(),
    name: 'data tables',
    icon: '/images/icons/layers.svg',
    haveImage: true,
    link: '/pages',
    children: [
      {
        id: uuid(),
        name: 'basic',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'striped table',
        link: '/pages',
      },
    ],
  },
  {
    id: uuid(),
    name: 'forms',
    icon: '/images/icons/clipboard.svg',
    haveImage: true,
    link: '/pages',
    children: [
      {
        id: uuid(),
        name: 'basic',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'input group',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'layouts',
        link: '/pages',
      },
    ],
  },
  {
    id: uuid(),
    name: 'users',
    icon: '/images/icons/users.svg',
    haveImage: true,
    link: '/pages',
    children: [
      {
        id: uuid(),
        name: 'profile',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'account settings',
        link: '/pages',
      },
    ],
  },
  {
    id: uuid(),
    name: 'pages',
    icon: '/images/icons/file.svg',
    haveImage: true,
    link: '/pages',
    children: [
      {
        id: uuid(),
        name: 'helpdesk',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'contact form',
        link: '/pages',
      },
    ],
  },
  {
    id: uuid(),
    name: 'authentication',
    icon: '/images/icons/lock.svg',
    haveImage: true,
    link: '/pages',
    children: [
      {
        id: uuid(),
        name: 'login boxed',
        link: '/pages',
      },
      {
        id: uuid(),
        name: 'register boxed',
        link: '/pages',
      },
    ],
  },
  {
    id: uuid(),
    name: 'drag and drop',
    icon: '/images/icons/move.svg',
    haveImage: true,
    link: '/pages',
  },
  {
    id: uuid(),
    name: 'charts',
    icon: '/images/icons/pie-chart.svg',
    haveImage: true,
    link: '/pages',
  },
  {
    id: uuid(),
    name: 'documentation',
    icon: '/images/icons/book.svg',
    haveImage: true,
    link: '/pages',
  },
];

export default sidebarList;
