import React from "react";
import { useState, useCallback } from "react";


// 定义 请求hook 复用逻辑
const useAsync = (asyncFunction: any) => {
  const [data, setData] = useState<null | any[]>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const execute = useCallback(() => {
    setLoading(true);
    setData(null);
    setError(null);
    return asyncFunction()
      .then((response: any) => {
        setData(response);
        setLoading(false);
      })
      .catch((error: any) => {
        setError(error);
        setLoading(false);
      });
  }, [asyncFunction]);

  return { execute, loading, data, error };
};

export default function UserList() {
  const {
    execute: fetchUsers,
    data: users,
    loading,
    error,
  } = useAsync(async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    return json.data;
  });

  return (
    <div className="user-list">
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Show Users"}
      </button>
      {error && <div style={{ color: "red" }}>Failed: {String(error)}</div>}
      <br />
      <ul>
        {users && users.length > 0 && users.map((user) => (
          <li key={user.id}>{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
}