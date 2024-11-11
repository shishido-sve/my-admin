// import React from "react";

// function Sales() {
//   const salesData = [
//     { month: "1月", amount: 120000, orders: 150 },
//     { month: "2月", amount: 150000, orders: 180 },
//     { month: "3月", amount: 180000, orders: 200 },
//   ];

//   return (
//     <div className="mt-5 space-y-6">
//       {/* 売上サマリー */}
//       <div className="rounded-2xl bg-white p-6">
//         <h2 className="mb-4 text-xl font-bold text-gray-800">売上サマリー</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b">
//                 <th className="p-3 text-left">月</th>
//                 <th className="p-3 text-left">売上金額</th>
//                 <th className="p-3 text-left">注文数</th>
//               </tr>
//             </thead>
//             <tbody>
//               {salesData.map((item, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="p-3">{item.month}</td>
//                   <td className="p-3">¥{item.amount.toLocaleString()}</td>
//                   <td className="p-3">{item.orders}件</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* 月間レポート */}
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//         <div className="rounded-2xl bg-white p-6">
//           <h3 className="mb-4 text-lg font-bold text-gray-800">今月のハイライト</h3>
//           <div className="space-y-3">
//             <div className="flex justify-between">
//               <span>売上達成率</span>
//               <span className="font-bold text-green-500">92%</span>
//             </div>
//             <div className="flex justify-between">
//               <span>前月比</span>
//               <span className="font-bold text-blue-500">+15%</span>
//             </div>
//           </div>
//         </div>

//         <div className="rounded-2xl bg-white p-6">
//           <h3 className="mb-4 text-lg font-bold text-gray-800">売上目標</h3>
//           <div className="space-y-3">
//             <div className="flex justify-between">
//               <span>月間目標</span>
//               <span className="font-bold">¥200,000</span>
//             </div>
//             <div className="flex justify-between">
//               <span>達成まで</span>
//               <span className="font-bold text-orange-500">¥20,000</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sales;
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Users, ShoppingCart, TrendingUp, Activity } from 'lucide-react';

const Dashboard = () => {
  // サンプルの時系列データ
  const salesData = [
    { month: '1月', sales: 65000, users: 800, orders: 120 },
    { month: '2月', sales: 75000, users: 950, orders: 150 },
    { month: '3月', sales: 123456, users: 1234, orders: 180 },
  ];

  // KPIカードのデータ
  const kpiData = [
    {
      title: '総ユーザー数',
      value: '1,234',
      change: '+15%',
      icon: <Users className="h-6 w-6" />,
      color: 'blue'
    },
    {
      title: 'アクティブユーザー',
      value: '892',
      change: '+12%',
      icon: <Activity className="h-6 w-6" />,
      color: 'green'
    },
    {
      title: '売上高',
      value: '¥123,456',
      change: '+22%',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'purple'
    },
    {
      title: '新規登録',
      value: '+22%',
      change: '+5%',
      icon: <ShoppingCart className="h-6 w-6" />,
      color: 'yellow'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* KPIグリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{kpi.title}</p>
                  <p className="text-2xl font-bold">{kpi.value}</p>
                  <p className="text-sm text-green-500">{kpi.change}</p>
                </div>
                <div className={`p-3 bg-${kpi.color}-100 rounded-full`}>
                  {kpi.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* グラフセクション */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>売上トレンド</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart width={500} height={300} data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" name="売上" />
            </LineChart>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ユーザー成長</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart width={500} height={300} data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#82ca9d" name="ユーザー数" />
            </LineChart>
          </CardContent>
        </Card>
      </div>

      {/* クイックアクションセクション */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-medium mb-2">最近のアクティビティ</h3>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">新規ユーザー登録 - 5分前</div>
              <div className="text-sm text-gray-600">売上発生 - 15分前</div>
              <div className="text-sm text-gray-600">システム更新 - 1時間前</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-medium mb-2">人気商品</h3>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">商品A - 売上: ¥50,000</div>
              <div className="text-sm text-gray-600">商品B - 売上: ¥35,000</div>
              <div className="text-sm text-gray-600">商品C - 売上: ¥25,000</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-medium mb-2">システム状態</h3>
            <div className="space-y-2">
              <div className="text-sm text-green-600">サーバー負荷: 正常</div>
              <div className="text-sm text-green-600">API状態: 正常</div>
              <div className="text-sm text-green-600">バックアップ: 完了</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;