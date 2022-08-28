import React, { useState, FC } from "react";
import { User } from ".";
import Button from "../../components/button";
import { createUser } from "../api/users";
import CreateUserModal from "./CreateUserModal";

interface CreateUserProps {
  users: User[];
}

const UserTablePage: FC<CreateUserProps> = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const { users } = props;

  const toggleModel = () => setOpenModal((prevState) => !prevState);

  const onCreateUser = async (userFormInputs: User) => {
    try {
      await createUser(userFormInputs);
    } catch (err) {
      console.error(err);
    }
  };

  if (!users) {
    return null;
  }

  return (
    <>
      <Button
        className={
          "bg-green-600 hover:bg-green-700 focus:ring-green-800 ml-6 mt-6"
        }
        onClick={() => setOpenModal(true)}
      >
        Add new user
      </Button>
      <CreateUserModal
        openModal={openModal}
        toggleModel={toggleModel}
        onCreateUser={onCreateUser}
      />
    </>
  );
};

export default UserTablePage;
