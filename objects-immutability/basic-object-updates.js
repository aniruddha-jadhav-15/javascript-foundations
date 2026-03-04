// Basic Object Updates (Immutable)

const userProfile = {
  id: 1,
  name: "Anirudd",
  age: 22,
  address: {
    city: "Kolhapur",
    zip: 416003,
  },
  isLoggedIn: false,
};

// Update age
const updatedAge = {
  ...userProfile,
  age: 23,
};

// Update city
const updatedCity = {
  ...userProfile,
  address: {
    ...userProfile.address,
    city: "Pune",
  },
};

// Update login status
const updatedLoginStatus = {
  ...userProfile,
  isLoggedIn: true,
};

// Combined update
const updatedUserProfile = {
  ...userProfile,
  age: 23,
  isLoggedIn: true,
  address: {
    ...userProfile.address,
    city: "Pune",
  },
};

console.log(updatedUserProfile);
