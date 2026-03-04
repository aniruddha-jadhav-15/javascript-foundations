// Deep Nested State Update (Immutable)

const appState = {
  user: {
    id: 1,
    name: "Anirudd",
    address: {
      city: "Kolhapur",
      zip: 416003,
      geo: {
        lat: 16.705,
        lng: 74.243,
      },
    },
  },
  theme: "light",
};

const updatedAppState = {
  ...appState,
  theme: "dark",
  user: {
    ...appState.user,
    address: {
      ...appState.user.address,
      city: "Mumbai",
      geo: {
        ...appState.user.address.geo,
        lat: 19.076,
      },
    },
  },
};

console.log(updatedAppState);
