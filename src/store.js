import { fetchUser } from '@/api';
import { create } from 'zustand';

const userStore = (set) => ({
  username: '',
  user: {},
  setUsername: (username) => set(() => ({ username: username })),
  fetchUserData: async (username) => {
    const user = await fetchUser(username);
    return set(() => ({ user: user ? user : {} }));
  },

  partialize: (state) => ({
    username: state.username,
  }),
});

const useUserStore = create(userStore, { name: 'userStore' });

export default useUserStore;
