import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import HeroSection from "./pages/student/HeroSection";
import MainLayout from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            {/* Course */}
            <Courses />
          </>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "my-learning",
        element: <MyLearning />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter}>
        <Navbar />
        <HeroSection />
        <Login />
      </RouterProvider>
    </main>
  );
}

export default App;
