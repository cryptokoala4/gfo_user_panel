import React, { useState, useCallback, useEffect, FC, useMemo } from "react";
import { createUser, deleteUser, getUsers, updateUser } from "../api/users";
import CreateUser from "./UserForm";
import UserTable from "./UserTable";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: boolean;
  password: string;
}

const UserPanel: FC<{}> = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = useCallback(async () => {
    try {
      const result = await getUsers();
      setUsers(result as User[]);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const onCreateUser = async (userFormInputs: User) => {
    console.log('@@@', userFormInputs)
    try {
      await createUser(userFormInputs);
      await fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const onUpdateUser = async (id: string) => {
    const user = users.find((user) => user.id === id);
    const status = !user?.status
    
    try {
      await updateUser(id, { ...user!, status });
      await fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const onRemoveUser = async (id: string) => {
    try {
      await deleteUser(id);
      await fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <UserTable
        users={users}
        onUpdateUser={onUpdateUser}
        onRemoveUser={onRemoveUser}
      />
      <CreateUser onCreateUser={onCreateUser} />
    </>
  );
};

export default UserPanel;
