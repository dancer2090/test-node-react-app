export const getUsers = async () => {
  const response = await fetch('/users');
  return response.json();
};

export const getUser = async (slug) => {
  const response = await fetch(`/users/${slug}`);
  return response.json();
};

export const searchUsers = (users, searchName) => users.filter(
  (item) => item.firstname === searchName
);
