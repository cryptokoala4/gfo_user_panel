import React, { useState, useCallback, useEffect, FC } from "react";
import { createUser, deleteUser, getUsers, updateUser } from "../api/users";
import bcrypt from "bcryptjs";
import CreateUser from "./UserForm";
import UserTable from "./UserTable";
import UserAlert from "./UserAlert";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
  password: string;
}

const UserPanel: FC<{}> = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const onGetUsers = useCallback(async () => {
    try {
      const result = await getUsers();
      setUsers(result as User[]);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const onCreateUser = async (userFormInputs: User) => {
    function validateEmail(email: string) {
      return /\S+@\S+\.\S+/.test(email);
    }

    function saltPassword(password: string) {
      const salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(password, salt);
    }

    const hashedPassword = saltPassword(userFormInputs.password);
    
    const userFormInputsWithHashedPw = {
      ...userFormInputs,
      password: hashedPassword,
    };

    if (validateEmail(userFormInputsWithHashedPw.email)) {
      try {
        await createUser(userFormInputsWithHashedPw);
        await onGetUsers();
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 2500);
      } catch (err) {
        console.error(err);
      }
    } else {
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 2500);
    }
  };

  const onUpdateUser = async (id: string) => {
    const user = users.find((user) => user.id === id);
    const status = user?.status === "Deactivated" ? 'Active' : 'Deactivated';
    console.log('status', status)

    try {
      await updateUser(id, { ...user!, status });
      await onGetUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const onRemoveUser = async (id: string) => {
    try {
      await deleteUser(id);
      await onGetUsers();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    onGetUsers();
  }, [onGetUsers]);

  return (
    <>
      <UserAlert
        showSuccessAlert={showSuccessAlert}
        showErrorAlert={showErrorAlert}
      />
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
