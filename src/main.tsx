import ReactDOM from 'react-dom/client';
import './index.css'
import {App} from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {PageNotFound} from "./pages/Page-not-found.tsx";
import {StrictMode} from "react";
import {PageNotBuild} from "./pages/Page-not-build.tsx";
import {Home} from "./pages/Home.tsx"
////npm install @emotion/react @emotion/styled

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "/", element: <Home/>},
            {path:"/profil", element: <PageNotBuild/>},
            {path:"/compte", element: <PageNotBuild/>},
            {path:"/logout", element: <PageNotBuild/>},
            {path: "/*", element: <PageNotFound/>},
        ]
    }
])
// Rendu principal compatible avec la nouvelle API Concurrent Mode.
ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);

