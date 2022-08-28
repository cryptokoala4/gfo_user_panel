import React, { useState, FC } from "react";
import { User } from ".";
import Button from "../../components/Button";
import CreateUserModal from "./UserFormModal";

interface CreateUserProps {
  onCreateUser: (arg: User) => void;
}

const UserTablePage: FC<CreateUserProps> = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const { onCreateUser } = props;

  const toggleModel = () => setOpenModal((prevState) => !prevState);
  const onCreateUserDrill = (user: User) => onCreateUser(user)

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
        onCreateUserDrill={onCreateUserDrill}
      />
    </>
  );
};

export default UserTablePage;
