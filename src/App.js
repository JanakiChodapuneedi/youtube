
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Head from "./Components/Head";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import store from './utils/Store'

function App() {

  const browserrouter = createBrowserRouter([{
    path : '/',
    element : <Body/>,
    children : [{
      path : '/',
      element : <MainContainer/>
    },
    {
      path : "watch",
      element : <WatchPage/>
    }]

  }])

  return (
    <Provider store={store}>
    <div>
      <Head/>
      <RouterProvider router={browserrouter}>
      <Body/>
      </RouterProvider>
    </div>
    </Provider>
  );
}

export default App;
