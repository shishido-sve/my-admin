import React from "react";

function Users() {
  const users = [
    { id: 1, name: "山田太郎", email: "yamada@example.com", status: "アクティブ" },
    { id: 2, name: "鈴木花子", email: "suzuki@example.com", status: "アクティブ" },
    { id: 3, name: "佐藤一郎", email: "sato@example.com", status: "非アクティブ" },
  ];

  return (
    <div className="mt-5 space-y-6">
      {/* ユーザー追加ボタン */}
      <div className="flex justify-end">
        <button className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          + ユーザー追加
        </button>
      </div>

      {/* ユーザーリスト */}
      <div className="rounded-2xl bg-white p-6">
        <h2 className="mb-4 text-xl font-bold text-gray-800">ユーザー一覧</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">名前</th>
                <th className="p-3 text-left">メール</th>
                <th className="p-3 text-left">ステータス</th>
                <th className="p-3 text-left">操作</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-3">{user.id}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    <span className={`rounded-full px-2 py-1 text-sm ${
                      user.status === "アクティブ" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="mr-2 text-blue-500 hover:text-blue-700">編集</button>
                    <button className="text-red-500 hover:text-red-700">削除</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;