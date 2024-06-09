import "./App.css";
import Body from "./components/Body";
import Browse from "./components/Browse";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import MovieDetails from "./components/MovieDetails";
import Gemini from "./components/Gemini";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/movieinfo",
    element: <MovieDetails />,
  },
  {
    path: "/gemini",
    element: <Gemini />,
  },
  
]);

function App() {
  
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </Provider>
  );
}

export default App;
