import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';
import { UserType } from '../types/types';
import { WhoAmITypeServerType } from '../api/serverTypes';
import { showError } from './errorHelper';
import { serverApi } from '../api/serverApi';
import { AxiosError } from 'axios';
import { TOKEN_NAME } from '../index';
import { LanguageEnum } from '../journals/journal_A/components/Header/LanguageSelector/LanguageSelector';

export interface ArticlesState {
  isLoading: boolean;
  isAuth: boolean;
  user: UserType | undefined;
  language: LanguageEnum | undefined;
}

const initialState: ArticlesState = {
  isLoading: false,
  isAuth: false,
  user: undefined,
  language: undefined,
};

export const authUserThunk = createAsyncThunk<WhoAmITypeServerType | boolean, string, { rejectValue: string }>(
  'user/authUser',
  async (token, { rejectWithValue }) => {
    try {
      const user = await serverApi.whoAmI(token);
      localStorage.setItem(TOKEN_NAME, token);
      return user;
    } catch (e) {
      if ((e as AxiosError).message.includes('401')) {
        return false;
      }
      return rejectWithValue('Server error - get User');
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isAuth = false;
      state.user = undefined;
      localStorage.removeItem(TOKEN_NAME);
    },
    setLanguage: (state, action: PayloadAction<LanguageEnum>) => {
      state.language = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authUserThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = {
            id: (action.payload as WhoAmITypeServerType).currentUser.id,
            name: (action.payload as WhoAmITypeServerType).currentUser.username,
          };
          state.isAuth = true;
        } else {
          userSlice.caseReducers.logoutUser(state);
        }
        state.isLoading = false;
      })
      .addCase(authUserThunk.rejected, (state, action) => {
        userSlice.caseReducers.logoutUser(state);
        showError(action.payload);
        state.isLoading = false;
      });
  },
});

export const { logoutUser, setLanguage } = userSlice.actions;

export const selectorUserSliceIsAuth = (state: RootState) => state.user.isAuth;
export const selectorUserSliceUser = (state: RootState) => state.user.user;
export const selectorUserLanguage = (state: RootState) => state.user.language;

export default userSlice.reducer;
