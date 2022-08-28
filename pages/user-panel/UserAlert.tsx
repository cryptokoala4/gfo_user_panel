import React from "react";
import { FC } from "react";

interface UserAlertProps {
  showSuccessAlert: boolean;
  showErrorAlert: boolean;
}

const UserAlert: FC<UserAlertProps> = (props) => {
  const { showSuccessAlert, showErrorAlert } = props;

  const renderAlert = () => {
    if (showSuccessAlert) {
      return (
        <div className="bg-green-500 absolute z-10 right-10 top-8 text-white px-6 py-5 border-0 rounded w-200 opacity-90">
          <span className="">User successfully created</span>
        </div>
      );
    } else if (showErrorAlert) {
      return (
        <div className="bg-red-400 absolute z-10 right-10 top-8 text-white px-6 py-5 border-0 rounded w-200  opacity-90">
          <span className="inline-block align-middle mr-8">
            Please enter a valid email address
          </span>
        </div>
      );
    }
  };

  return <>{renderAlert()}</>;
};

export default UserAlert;
