import { fetchUser, fetchRepos } from '@/api';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const userStore = (set) => ({
  username: 'sdf',
  user: {},
  repo: {},
  errMsg: '',

  setUsername: (username) => set(() => ({ username: username })),
  fetchUserData: async (username) => {
    try {
      const user = await fetchUser(username);
      const repo = await fetchRepos(username);
      return set(() => ({ user: user, repo: repo }));
    } catch (err) {
      return set({ errMsg: err.message });
    }
  },

  clearErrors: () => set({ errMsg: '' }),
});

const useUserStore = create(devtools(userStore), { name: 'userStore' });

export default useUserStore;
