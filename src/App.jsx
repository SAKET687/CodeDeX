import { RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import UserProfileForm from './UserProfileForm'
import { createBrowserRouter } from 'react-router-dom'
import UsernameForm from './UsernameForm'
import AppDrawer from './AppDrawer'

const router= createBrowserRouter(
  [
    {
      path: '/',
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path: '/d',
      element:
      <div>
        <Navbar/>
        <AppDrawer/>
      </div>
    },
    {
      path: '/editprofile',
      element:
      <UserProfileForm/>
    },
    {
      path: '/updateusernames',
      element:
      <UsernameForm/>
    }
  ]
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
