import React, {
  FC,
  useState,
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
} from "react";
import { User } from ".";
import Button from "../../components/Button";
import { userFormFields } from "../../helper/constant";

interface UserModalProps {
  openModal: boolean;
  toggleModel: MouseEventHandler<HTMLButtonElement>;
  onCreateUserDrill: (arg: User) => void;
}

const CreateUserModal: FC<UserModalProps> = (props) => {  
  const [userFormInputs, setUserFormInputs] = useState<User>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    status: "",
    password: "",
  });
  const { openModal, toggleModel, onCreateUserDrill } = props;

  const handleUserFormChange = (
    el: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) =>
    setUserFormInputs((prevState) => ({
      ...prevState,
      [el.target.name]: el.target.value,
    }));

  const handleCreateUser = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onCreateUserDrill(userFormInputs);
  };

  return (
    <>
      {openModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50">
            <div className="relative w-auto my-6 mx-auto max-w-7xl w-1/3">
              <div className="flex rounded-lg flex-col bg-white">
                <div className="flex items-start justify-between p-5 border-b">
                  <h3 className="text-3xl font-semibold">Add new user</h3>
                </div>
                <div className="p-6">
                  <form onSubmit={handleCreateUser}>
                    <div className="py-2">
                      {userFormFields &&
                        userFormFields.map((userFormFields) => {
                          const { key, title, type } = userFormFields;
                          return (
                            <input
                              key={key}
                              name={key}
                              placeholder={title}
                              onChange={handleUserFormChange}
                              type={type || "text"}
                              className="border border-gray-600 rounded-lg focus:ring-blue-500 w-full p-2.5 mb-2.5"
                              required
                            ></input>
                          );
                        })}
                    </div>

                    <div className="py-2">
                      <select
                        onChange={handleUserFormChange}
                        required
                        name="status"
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option value="">Select Activation Status</option>
                        <option value="Active">Active</option>
                        <option value="Deactivated">Deactivated</option>
                      </select>
                    </div>

                    <div className="py-2">
                      <select
                        onChange={handleUserFormChange}
                        required
                        name="role"
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option value="">Select a User Role</option>
                        <option value="Customer Service">
                          Customer Service
                        </option>
                        <option value="Risk">Risk</option>
                        <option value="Compliance">Compliance</option>
                      </select>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        className={
                          "bg-red-600 hover:bg-red-700 focus:ring-red-800 mr-2"
                        }
                        onClick={toggleModel}
                        type="button"
                      >
                        Close
                      </Button>

                      <Button
                        className={
                          "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                        }
                        type="submit"
                      >
                        Confirm
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0  bg-black"></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CreateUserModal;
