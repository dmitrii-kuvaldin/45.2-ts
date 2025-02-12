import { createSlice } from '@reduxjs/toolkit';
import { loginAction, loginToken } from "./authActions";
import { IAuthState, IUser } from "./types";

const initialUser: IUser = {
  id: 0,
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  image: "",
  accessToken: "",
  refreshToken: ""
};

const initialState: IAuthState = {
  user: initialUser,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  // по ключу reducers мы описываем синхронные действия в приложении
  reducers: {
    // logoutUser - это имя action для обработки которого в приложении будем использовать dispatch() (как с асинхронными actions)
    logoutUser: (state) => {
      state.user = initialUser;
    }
  },
  // extraReducers - для обработки результата асинхронных действий
  extraReducers: (builder) => {
    builder
      // обработка запроса из формы
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.isLoading = false;
        state.user = initialUser;
        state.error = action.payload as string;
      })
      // запрос из useEffect использующий token
      .addCase(loginToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginToken.rejected, (state, action) => {
        state.isLoading = false;
        state.user = initialUser;
        state.error = action.payload as string;
      });

  },
});

export default authSlice;

// ! не забываем экспортировать синхронные actions
export const { logoutUser } = authSlice.actions;
