import Layout from "./components/pages/Layout";

const routes = [
  {
    name: "Классификатор услуг",
    path: "/",
    element: <Layout page="classifier" />
  },
  {
    name: "Архив услуг",
    path: "/archive",
    element: <Layout page="archive" />
  },
  {
    name: "Пользователи",
    path: "/users",
    element: <Layout page="users" />
  },
  {
    name: "Администрирование",
    path: "/admin",
    element: <Layout page="admin" />
  },
  {
    name: "Вход",
    path: "/login",
    element: <Layout page="login" />
  }
];

export default routes;
