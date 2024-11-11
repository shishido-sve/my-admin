// import MiniCalendar from "components/calendar/MiniCalendar";
// import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
// import TotalSpent from "views/admin/default/components/TotalSpent";
// import PieChartCard from "views/admin/default/components/PieChartCard";
// import { IoMdHome } from "react-icons/io";
// import { IoDocuments } from "react-icons/io5";
// import { MdBarChart, MdDashboard } from "react-icons/md";

// import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

// import Widget from "components/widget/Widget";
// import CheckTable from "views/admin/default/components/CheckTable";
// import ComplexTable from "views/admin/default/components/ComplexTable";
// import DailyTraffic from "views/admin/default/components/DailyTraffic";
// import TaskCard from "views/admin/default/components/TaskCard";
// import tableDataCheck from "./variables/tableDataCheck.json";
// import tableDataComplex from "./variables/tableDataComplex.json";

// const Dashboard = () => {
//   return (
//     <div>
//       {/* Card widget */}

//       <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
//         <Widget
//           icon={<MdBarChart className="h-7 w-7" />}
//           title={"Earnings"}
//           subtitle={"$340.5"}
//         />
//         <Widget
//           icon={<IoDocuments className="h-6 w-6" />}
//           title={"Spend this month"}
//           subtitle={"$642.39"}
//         />
//         <Widget
//           icon={<MdBarChart className="h-7 w-7" />}
//           title={"Sales"}
//           subtitle={"$574.34"}
//         />
//         <Widget
//           icon={<MdDashboard className="h-6 w-6" />}
//           title={"Your Balance"}
//           subtitle={"$1,000"}
//         />
//         <Widget
//           icon={<MdBarChart className="h-7 w-7" />}
//           title={"New Tasks"}
//           subtitle={"145"}
//         />
//         <Widget
//           icon={<IoMdHome className="h-6 w-6" />}
//           title={"Total Projects"}
//           subtitle={"$2433"}
//         />
//       </div>

//       {/* Charts */}

//       <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
//         <TotalSpent />
//         <WeeklyRevenue />
//       </div>

//       {/* Tables & Charts */}

//       <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
//         {/* Check Table */}
//         <div>
//           <CheckTable
//             columnsData={columnsDataCheck}
//             tableData={tableDataCheck}
//           />
//         </div>

//         {/* Traffic chart & Pie Chart */}

//         <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
//           <DailyTraffic />
//           <PieChartCard />
//         </div>

//         {/* Complex Table , Task & Calendar */}

//         <ComplexTable
//           columnsData={columnsDataComplex}
//           tableData={tableDataComplex}
//         />

//         {/* Task chart & Calendar */}

//         <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
//           <TaskCard />
//           <div className="grid grid-cols-1 rounded-[20px]">
//             <MiniCalendar />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React from "react";
import SalesChart from "./components/SalesChart";
import UsersChart from "./components/UsersChart";

function Main() {
  return (
    <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      {/* 統計カード1 */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <p className="text-sm text-gray-500">総ユーザー数</p>
        <p className="text-2xl font-bold text-navy-700">1,234</p>
      </div>

      {/* 統計カード2 */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <p className="text-sm text-gray-500">アクティブユーザー</p>
        <p className="text-2xl font-bold text-navy-700">892</p>
      </div>

      {/* 統計カード3 */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <p className="text-sm text-gray-500">売上高</p>
        <p className="text-2xl font-bold text-navy-700">¥123,456</p>
      </div>

      {/* 統計カード4 */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <p className="text-sm text-gray-500">新規登録</p>
        <p className="text-2xl font-bold text-navy-700">+22%</p>
      </div>
    </div>
  );
};

export default Main;