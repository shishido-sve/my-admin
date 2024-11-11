import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar";

// Import pages
import Main from "./views/admin/default";
import Sales from "./views/admin/sales";
import Users from "./views/admin/users";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-8">
        <Routes>
          <Route path="/" element={<Navigate to="/admin/default" replace />} />
          <Route path="/admin/default" element={<Main />} />
          <Route path="/admin/sales" element={<Sales />} />
          <Route path="/admin/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
