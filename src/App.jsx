import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import CaregiversPage from "./pages/CaregiversPage/CaregiversPage";
import BookmarksPage from "./pages/BookmarksPage/BookmarksPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AuthenticatedRoute from "./components/Auth/AuthenticatedRoute/AuthenticatedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="nannies" element={<CaregiversPage />} />
        <Route
          path="favorites"
          element={
            <AuthenticatedRoute redirectTo="/nannies">
              <BookmarksPage />
            </AuthenticatedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
