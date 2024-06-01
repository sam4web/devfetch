export const fetchUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  if (response.ok) {
    return data;
  }
};

export default fetchUser;

// export const fetchRepos = (username) => {};
