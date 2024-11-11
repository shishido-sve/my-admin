// import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdHome, MdShoppingCart, MdPeople } from "react-icons/md";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: "メインダッシュボード",
      icon: <MdHome className="h-6 w-6" />,
      path: "/admin/default"
    },
    {
      name: "売上管理",
      icon: <MdShoppingCart className="h-6 w-6" />,
      path: "/admin/sales"
    },
    {
      name: "ユーザー管理",
      icon: <MdPeople className="h-6 w-6" />,
      path: "/admin/users"
    }
  ];

  return (
    <div className="fixed left-0 top-0 z-50 h-full w-64 bg-white shadow-sm">
      {/* ロゴ部分 */}
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">HORIZON FREE</h1>
      </div>

      {/* メニューリスト */}
      <nav className="mt-8">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center space-x-3 px-6 py-3 text-gray-600 transition-colors hover:bg-gray-50 ${
              location.pathname === item.path ? "bg-gray-50 text-blue-600" : ""
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;