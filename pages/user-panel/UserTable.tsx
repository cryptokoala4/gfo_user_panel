import React, { FC } from "react";
import { User } from ".";
import Button from "../../components/button";
import { userTableHeader } from "./constant";

interface UserTableProps {
  users: User[];
  onRemoveUser: (arg: string) => void;
  onUpdateUser: (arg: string) => void;
}

const UserTable: FC<UserTableProps> = (props) => {
  const { users, onRemoveUser, onUpdateUser } = props;

  return (
    <>
      <div className="p-1.5 w-full">
        <div className="overflow-hidden border rounded-lg">
          <table className="table-auto border-collapse w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {userTableHeader &&
                  userTableHeader.map((userTableHeader) => {
                    const { key, title } = userTableHeader;
                    return (
                      <th
                        key={key}
                        className="px-2 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        {title}
                      </th>
                    );
                  })}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users &&
                users.map((users) => {
                  const {
                    id,
                    firstName,
                    lastName,
                    email,
                    password,
                    role,
                    status,
                  } = users;
                  return (
                    <tr key={id}>
                      <td className="px-2 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {id}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {firstName}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {lastName}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {email}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap flex items-center">
                        {password}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {role}
                      </td>
                      {status ? (
                        <td className="px-4 py-4 text-sm whitespace-nowrap text-green-700 font-medium">
                          Activated
                        </td>
                      ) : (
                        <td className="px-4 py-4 text-sm whitespace-nowrap text-red-700 font-medium">
                          Deactivated
                        </td>
                      )}
                      <td>
                        <Button
                          className={
                            "bg-blue-500 hover:bg-blue-600 focus:ring-blue-700"
                          }
                          onClick={() => onUpdateUser(id)}
                        >
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button
                          className={
                            "bg-red-500 hover:bg-red-600 focus:ring-red-700"
                          }
                          onClick={() => onRemoveUser(id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserTable;
