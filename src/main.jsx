import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// assets 
import App from './App.jsx'
import './assets/css/index.css'

// pages 
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
// import Login from './pages/authPage/login.jsx'
// import Registration from './pages/authPage/registration.jsx'
import Profile from './components/homePage/Profile.jsx'
import Messages from './components/homePage/Messages.jsx'
import Category from './components/homePage/Category';
import UserList from './components/homePage/UserList';
import PostList from './components/homePage/PostList';
import Company from './components/aboutPage/Company';
import Curiculam from './components/aboutPage/Curiculam';
import Owner from './components/aboutPage/Owner';
import UserLists from './components/homePage/UserLists.jsx'

// simple data 
const userData = [
  {
      id: 1,
      name: 'John',
      age: 36,
      category: 'Job Holder'
  },
  {
      id: 2,
      name: 'Rokibul',
      age: 23,
      category: 'Student'
  },
  {
      id: 3,
      name: 'Anika',
      age: 30,
      category: 'House Wife'
  },
  {
      id: 4,
      name: 'Niharika',
      age: 26,
      category: 'Job Holder'
  },
  {
      id: 5,
      name: 'Hasan',
      age: 47,
      category: 'Job Holder'
  },
]

// main router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        children: [
          {
            path: '/',
            element: <Profile/>
          },
          {
            path: 'messages',
            element: <Messages/>
          },
          {
            path: 'category',
            element: <Category/>
          },
          {
            path: 'userList',
            element: <UserList navData={userData}/>,
            children: userData.map(user => {
              
              return {
                path: user.id.toString(),
                element: <UserLists user={user}/>,
                
              }
            })
          },
          {
            path: 'postList',
            element: <PostList/>
          },
        ]
      },
      {
        path: '/about',
        element: <About navData={[
          {
            name: 'Company',
            url: 'company',
          },
          {
            name: 'Curiculam',
            url: 'curiculam',
          },
          {
            name: 'Owner',
            url: 'owner',
          },
        ]} />,
        children: [
          {
            path: 'company',
            element: <Company/>
          },
          {
            path: 'curiculam',
            element: <Curiculam/>
          },
          {
            path: 'owner',
            element: <Owner/>
          }
        ]
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/faq',
        element: <FAQ/>
      },
    ],
    errorElement: <ErrorPage/>
  },
  // {
  //   path: '/login',
  //   element: <Login/>
  // },
  // {
  //   path: '/registration',
  //   element: <Registration/>
  // }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
