import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth, getCurrentAuthState } from "../../FirebaseConfig";
import {
  setUser,
  clearUser,
  setLoading,
  setError,
} from "../reducers/authReducer";
import { onAuthStateChanged } from "firebase/auth";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading());

      const { email, password, fullName } = userData;

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: fullName,
        });

        toast.success("Registration successful! Welcome!");
        thunkAPI.dispatch(setUser(userCredential.user.displayName));
        return userCredential.user.displayName;
      }
    } catch (error) {
      toast.error(
        "Registration failed. Please check your information and try again."
      );
      thunkAPI.dispatch(setError(error.message));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading());

      const { email, password } = userData;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.success("Login successful! Welcome back!");
      thunkAPI.dispatch(setUser(userCredential.user.displayName));
      return userCredential.user.displayName;
    } catch (error) {
      toast.error("Login failed. Please check your credentials and try again.");
      thunkAPI.dispatch(setError(error.message));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading());

      await signOut(auth);
      toast.info("You have been logged out successfully.");
      thunkAPI.dispatch(clearUser());
      window.location.href = "/";
    } catch (error) {
      toast.error("Logout failed. Please try again.");
      thunkAPI.dispatch(setError(error.message));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading());
      const currentUser = await getCurrentAuthState();
      if (currentUser) {
        thunkAPI.dispatch(setUser(currentUser.displayName));
      } else {
        thunkAPI.dispatch(clearUser());
      }
      return currentUser ? currentUser.displayName : null;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const listenToAuthChanges = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user.displayName));
    } else {
      dispatch(clearUser());
    }
  });
};
