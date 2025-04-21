import { createAsyncThunk } from "@reduxjs/toolkit";
import { onValue, ref } from "firebase/database";
import { database } from "../../FirebaseConfig";

export const fetchCaregivers = createAsyncThunk(
  "caregivers/fetchCaregivers",
  async (_, thunkAPI) => {
    try {
    
      const dbRef = ref(database, "/");

      return new Promise((resolve, reject) => {
        onValue(
          dbRef,
          (snapshot) => {
            const data = snapshot.val();

            if (!data) {
              console.warn(
                "No caregivers found in database! Returning empty array."
              );
              return resolve([]);
            }

            const caregivers = Object.values(data);
           
            resolve(caregivers);
          },
          (error) => {
            console.error("Firebase onValue error:", error);
            reject(error);
          }
        );
      });
    } catch (error) {
      console.error("Error in fetchCaregivers thunk:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
