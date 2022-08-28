import { v4 as uuidv4 } from "uuid";

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
