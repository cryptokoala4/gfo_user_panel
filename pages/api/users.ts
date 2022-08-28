import { v4 as uuidv4 } from "uuid";
import { User } from "../user-panel";

const mockUserId1 = uuidv4();
const mockUserId2 = uuidv4();

// mock users
let users = {
  [mockUserId1]: {
    id: mockUserId1,
    firstName: "Peter",
    lastName: "Griffin",
    email: "peter.griffin@gmail.com",
    password: "stewie1234",
    role: "CS",
    status: "Active",
  },
  [mockUserId2]: {
    id: mockUserId2,
    firstName: "Fa",
    lastName: "Mulan",
    email: "fa.mulan@gmail.com",
    password: "mickymouse1234",
    role: "Risk",
    status: "Deactivated",
  },
};

// mock API
export const getUsers = () =>
  new Promise((resolve, reject) => {
    if (!users) {
      return setTimeout(() => reject(new Error("Users not found")), 250);
    }

    setTimeout(() => resolve(Object.values(users)), 250);
  });

export const createUser = (data: User) =>
  new Promise((resolve, reject) => {
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.password ||
      !data.role ||
      !data.status
    ) {
      reject(new Error("Not all information provided"));
    }

    const id = uuidv4();
    const newUser = { ...data, id };

    users = { ...users, [id]: newUser };

    setTimeout(() => resolve(true), 250);
  });

export const deleteUser = (id: string) =>
  new Promise((resolve, reject) => {
    const { [id]: user, ...rest } = users;

    if (!user) {
      return setTimeout(() => reject(new Error("User not found")), 250);
    }

    users = { ...rest };

    return setTimeout(() => resolve(true), 250);
  });
