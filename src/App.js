import './App.css';
import Body from './components/Body';
import NewComp from './components/NewComp';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const appRouter = createBrowserRouter(
  [{
    path:"/",
    element:<Body/>
  },
  {
    path:"/new",
    element:<NewComp/>
  }]
)

function App() {
  return (
  <Provider store={appStore}>
    <RouterProvider router={appRouter}>
      <Body/>
      </RouterProvider>
      </Provider>
  );
}


export default App;
