import React, { useRef, useState } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserLIst";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@exapmle.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);
  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const onCreate = () => {
    console.log(nextId.current);
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    //setUsers(users.concat(user))
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
