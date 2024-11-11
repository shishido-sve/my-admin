// import Dashboard from "views/admin/default";
import React from "react"; // Reactをインポート
import Main from "./views/admin/default"; // Mainコンポーネントをインポート
import Sales from "./views/admin/sales";  // 新しいコンポーネント
import Users from "./views/admin/users";  // 新しいコンポーネント

const routes = [
  {
    name: "メインダッシュボード",
    layout: "/admin",
    path: "default",
    component: <Main />
  },
  {
    name: "売上管理",
    layout: "/admin",
    path: "sales",
    component: <Sales />
  },
  {
    name: "ユーザー管理",
    layout: "/admin",
    path: "users",
    component: <Users />
  }
];

export default routes;