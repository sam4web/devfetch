/*
export const fetchUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  let errorMsg = '';
  
  if (response.ok) {
    return data;
  }
  
  switch (response.status) {
    case 404:
      errorMsg = `Profile with name "${username}" doesn't exist.`;
      break;
      default:
        errorMsg = 'Something went wrong.';
      }
      throw new Error(errorMsg);
    };
*/

/*
export const fetchRepos = async (username) => {
  const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const data = await response.json();
    return data;
  };
*/

import userData from '@/utils/mockUserData';
import userRepos from '@/utils/mockRepoData';

export const fetchUser = async (username) => {
  return userData;
};

export const fetchRepos = async (username) => {
  return userRepos;
};
