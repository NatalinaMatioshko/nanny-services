import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { setUser, clearUser } from "./reducers/authReducer";

export const listenToAuthChanges = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user.displayName));
    } else {
      dispatch(clearUser());
    }
  });
};
