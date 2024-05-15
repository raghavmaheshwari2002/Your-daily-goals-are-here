import Nav from "./Components/Nav";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const App=()=> {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Page1 />,
          <Nav />
        </>
      ),
    },
    {
      path: "/page2",
      element: (
        <>
          <Page2 />,
          <Nav />
        </>
      ),
    },
    {
      path: "/page3",
      element: (
        <>
          <Page3 />,
          <Nav />
        </>
      ),
    },
    {
      path: "/page4",
      element: (
        <>
          <Page4 />,
          <Nav />
        </>
      ),
    }
  ]);



  return (
    <>
      <div className="cstm1 ">
        <div className="cstm2 text-white ">
<RouterProvider router={router} />
        
        </div>
      </div>
    </>
  );
}

export default App;
