import './App.css';
import Body from './components/Body';
import NewComp from './components/NewComp';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

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
    <div className="App">
    <RouterProvider router={appRouter}/>
    </div>
  );
}


export default App;
