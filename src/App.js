import React, { useEffect, useState } from "react"
import TableHeader from "./Components/TableHeader"
import './App.css'

const App = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className="container">
      <h1>All Customers</h1>
      <TableHeader />

      {users.map((e) => {
        return (
          <tr >
            <td>{e.name}</td>
            <td>{e.company.name}</td>
            <td>
              {e.phone.length > 13
                ? e.phone.slice(0, 13)
                : e.phone}
            </td>
            <td>{e.email}</td>
            <td>{e.address.street}</td>
          </tr>
        );
      })}
    </div>
  );
}

export default App;
