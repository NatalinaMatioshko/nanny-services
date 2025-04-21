import { createAction } from "@reduxjs/toolkit";

export const addBookmark = createAction("bookmarks/addBookmark");
export const removeBookmark = createAction("bookmarks/removeBookmark");
