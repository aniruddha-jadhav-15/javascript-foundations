// Interview-Level Practice

// 1. Simple object update
const user = {
  id: 1,
  name: "Anirudd",
  isAdmin: false,
};

const updatedUser = { ...user, isAdmin: true };

// 2. Nested object update
const settings = {
  theme: "light",
  notifications: {
    email: true,
    sms: false,
  },
};

const updatedSettings = {
  ...settings,
  notifications: {
    ...settings.notifications,
    sms: true,
  },
};

// 3. Array update
const users = [
  { id: 1, name: "A", active: false },
  { id: 2, name: "B", active: false },
  { id: 3, name: "C", active: false },
];

const updatedUsers = users.map((user) =>
  user.id === 3 ? { ...user, active: true } : user,
);

// 4. Remove + update
const cart = [
  { id: 1, name: "Phone", quantity: 1 },
  { id: 2, name: "Laptop", quantity: 2 },
  { id: 3, name: "Tablet", quantity: 1 },
];

const updatedCart = cart
  .map((item) =>
    item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item,
  )
  .filter((item) => item.id !== 3);

// 5. Nested + array update
const state = {
  user: {
    id: 1,
    name: "Anirudd",
    posts: [
      { id: 101, title: "JS Basics", likes: 0 },
      { id: 102, title: "Immutability", likes: 0 },
    ],
  },
};

const updatedState = {
  ...state,
  user: {
    ...state.user,
    posts: state.user.posts.map((post) =>
      post.id === 102 ? { ...post, likes: post.likes + 1 } : post,
    ),
  },
};

console.log(updatedState);
