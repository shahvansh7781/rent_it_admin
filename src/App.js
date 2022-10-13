import Topbar from './components/topbar/Topbar'
import SideBar from './components/sidebar/SideBar'
import Home from './pages/home/Home'
import './App.css'
// import './style/dark.css'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Routes,
} from 'react-router-dom'
import UserList from './pages/UserList/UserList'
import User from './pages/user/User'
import ProductList from './pages/productlist/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newproduct/newProduct'
import Feedback from './pages/feedback/Feedback'
import DetailFeedback from './pages/detailFeedback/detailFeedback'
import { useContext, useState } from 'react'
import { DarkModeContext } from './context/context'

function App() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Router>
        <Topbar />

        <div className='container'>
          <SideBar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/users'>
              <UserList />
            </Route>
            <Route path='/user/:userID'>
              <User />
            </Route>
            <Route path='/cars'>
              <ProductList />
            </Route>
            <Route exact path='/product/:productID'>
              <Product />
            </Route>
            <Route exact path='/product/:productID'>
              <Product />
            </Route>
            <Route exact path='/myapp/admin/car/new'>
              <NewProduct />
            </Route>
            <Route exact path='/feedbacks'>
              <Feedback />
            </Route>
            <Route exact path='/feedback/:id'>
              <DetailFeedback />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
