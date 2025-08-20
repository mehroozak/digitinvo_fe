import './App.css'
import { Route, Routes } from 'react-router'
import WebsiteLayout from '@/layouts/Website'
import AuthLayout from '@/layouts/Auth'
import Home from '@/pages/website/Home'
import Login from './pages/portal/auth/Login'
import PortalLayout from './layouts/Portal'

function App() {

  return (
    <Routes>
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path='/auth' element={< AuthLayout/>}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route path='/app' element={< PortalLayout/>}>
        <Route index element={<div>invoice</div>} />
        <Route path="invoices" element={<div>invoices</div>} />
        <Route path="customers" element={<div>customers</div>} />
      </Route>
      
    </Routes >
  )
}

export default App
