import { useRef, useState } from "react";
import "../src/styles/home.css";

type user =
  {
    id: number;
    name: string;
    time: string;
  }

export function Home() {

  const [users, setUsers] = useState<user[]>([]);
  const inputValueRef = useRef("");

  function handleAddUserClicked() {

    if (users.find(item => item.name === inputValueRef.current) || !users) {
      alert("invalid name!")
      return;
    }

    const newUser: user =
    {
      id: users.length > 0 ? Math.max(...users.map(x => x.id)) + 1 : 1,
      name: inputValueRef.current,
      time: new Date().toLocaleTimeString()
    }

    setUsers([...users, newUser]);

    
  }

  function handleRemoveButtonClicked(id: number) {
    setUsers([...users.filter(item => item.id !== id)]);
  }

  return (
    <div className="container">
      <header>
        <input onChange={(event => inputValueRef.current = event.target.value)} />
        <button onClick={handleAddUserClicked}>New user</button>
      </header>

      <table>
        
        <colgroup>
          <col span={1} style={{ width: "50px" }} />
          <col span={1} style={{ width: "auto" }} />
          <col span={1} style={{ width: "100px" }} />
          <col span={1} style={{ width: 0 }} />
        </colgroup>

        <thead>
          <tr>
            <td className="td-center">ID</td>
            <td>Nome</td>
            <td className="td-center">Time</td>
          </tr>
        </thead>

        <tbody>
          {
            users.map(item =>
              <tr>
                <td className="td-center">{item.id}</td>
                <td>{item.name}</td>
                <td className="td-center time">{item.time}</td>
                <td><button onClick={() => handleRemoveButtonClicked(item.id)}>remove</button></td>
              </tr>
            )
          }
        </tbody>

      </table>

    </div>
  )
}
