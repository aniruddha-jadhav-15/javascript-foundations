// ==========================================
// Users Dataset
// ==========================================

const users = [
  { id: 1, name: "Amit", age: 24, salary: 32000, active: true },
  { id: 2, name: "Neha", age: 29, salary: 48000, active: false },
  { id: 3, name: "Ravi", age: 31, salary: 52000, active: true },
  { id: 4, name: "Sneha", age: 26, salary: 28000, active: true },
  { id: 5, name: "Arjun", age: 35, salary: 61000, active: false },
  { id: 6, name: "Priya", age: 27, salary: 45000, active: true },
  { id: 7, name: "Karan", age: 30, salary: 39000, active: false },
  { id: 8, name: "Meera", age: 23, salary: 25000, active: true },
  { id: 9, name: "Vikram", age: 32, salary: 70000, active: true },
  { id: 10, name: "Anjali", age: 28, salary: 41000, active: false },
];

// ==========================================
// Basic Transformations
// ==========================================

const usersOlderThan25 = users.filter((user) => user.age > 25);

const userNames = users.map((user) => user.name);

const firstInactiveUser = users.find((user) => !user.active);

const hasHighEarner = users.some((user) => user.salary > 45000);

const areAllUsersActive = users.every((user) => user.active);

// ==========================================
// Sorting (Immutable)
// ==========================================

const usersSortedBySalary = [...users].sort((a, b) => a.salary - b.salary);

// ==========================================
// Aggregations (Reduce)
// ==========================================

const totalSalary = users.reduce((sum, user) => sum + user.salary, 0);

const highestSalary = users.reduce(
  (max, user) => (user.salary > max ? user.salary : max),
  0,
);

const lowestSalaryUser = users.reduce(
  (lowest, user) => (user.salary < lowest.salary ? user : lowest),
  users[0],
);

const activeUserCount = users.reduce(
  (count, user) => (user.active ? count + 1 : count),
  0,
);

// ==========================================
// Real-World Chaining Example
// ==========================================

const qualifiedUserNames = users
  .filter((user) => user.active && user.salary > 40000)
  .sort((a, b) => b.salary - a.salary)
  .map((user) => user.name);

// ==========================================
// Dashboard Summary (Single Reduce)
// ==========================================

const userSummary = users.reduce(
  (acc, user) => {
    acc.totalUsers += 1;
    acc.totalSalary += user.salary;

    if (user.active) {
      acc.activeUsers += 1;
    } else {
      acc.inactiveUsers += 1;
    }

    return acc;
  },
  {
    totalUsers: 0,
    activeUsers: 0,
    inactiveUsers: 0,
    totalSalary: 0,
  },
);

// ==========================================
// Combined Analytics Object
// ==========================================

const analytics = {
  highEarners: users
    .filter((user) => user.salary > 45000)
    .map((user) => user.name),

  averageSalary:
    users.reduce((sum, user) => sum + user.salary, 0) / users.length,

  highestPaidActiveUser: users
    .filter((user) => user.active)
    .reduce((maxUser, user) => (user.salary > maxUser.salary ? user : maxUser)),

  inactiveUserCount: users.filter((user) => !user.active).length,
};

export {
  usersOlderThan25,
  userNames,
  firstInactiveUser,
  hasHighEarner,
  areAllUsersActive,
  usersSortedBySalary,
  totalSalary,
  highestSalary,
  lowestSalaryUser,
  activeUserCount,
  qualifiedUserNames,
  userSummary,
  analytics,
};
