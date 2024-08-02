import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { v } from '../styles/variables';

export const userMenu = [
  {
    text: 'Mi perfil',
    icono: <v.userIcon />,
    tipo: 'miperfil',
  },
  {
    text: 'Configuracion',
    icono: <v.settingsIcon />,
    tipo: 'configuracion',
  },
  {
    text: 'Cerrar sesión',
    icono: <v.logoutIcon />,
    tipo: 'cerrarsesion',
  },
];

export const links = [
  {
    label: 'Home',
    icon: <AiOutlineHome />,
    to: '/dashboard',
  },
  {
    label: 'Kardex',
    icon: <v.categoriesIcon />,
    to: '/dashboard/kardex',
  },
  {
    label: 'Reports',
    icon: <v.reportIcon />,
    to: '/dashboard/reports',
  },
];
export const secondaryLinksArray = [
  {
    label: 'Settings',
    icon: <AiOutlineSetting />,
    to: '/dashboard/settings',
  },
];

export const theme = [
  {
    icon: '🌞',
    description: 'light',
  },
  {
    icon: '🌚',
    description: 'dark',
  },
];

export const settingModules = [
  {
    title: 'Productos',
    subtitle: 'registra tus productos',
    icon: 'https://i.ibb.co/85zJ6yG/caja-del-paquete.png',
    link: '/configurar/productos',
  },
  {
    title: 'Personal',
    subtitle: 'ten el control de tu personal',
    icon: 'https://i.ibb.co/5vgZ0fX/hombre.png',
    link: '/configurar/usuarios',
  },

  {
    title: 'Tu empresa',
    subtitle: 'configura tus opciones básicas',
    icon: 'https://i.ibb.co/x7mHPgm/administracion-de-empresas.png',
    link: '/configurar/empresa',
  },
  {
    title: 'Categoria de productos',
    subtitle: 'asigna categorias a tus productos',
    icon: 'https://i.ibb.co/VYbMRLZ/categoria.png',
    link: '/configurar/categorias',
  },
  {
    title: 'Marca de productos',
    subtitle: 'gestiona tus marcas',
    icon: 'https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png',
    link: '/configurar/marca',
  },
];

export const userTypes = [
  {
    description: 'empleado',
    icon: '🪖',
  },
  {
    description: 'administrador',
    icon: '👑',
  },
];

export const docTypes = [
  {
    description: 'Dni',
    icon: '🪖',
  },
  {
    description: 'Libreta electoral',
    icon: '👑',
  },
  {
    description: 'Otros',
    icon: '👑',
  },
];
