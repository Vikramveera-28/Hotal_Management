import React, { Suspense, useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { NavbarLogin, Loading } from './Components/Features/index'
// API
import api from './Api/apiUrl'
// Custom Hooks
import useFetch from './Hooks/useFetch'
import useDeleteList from './Hooks/useDeleteList'
import { useNotification } from './Hooks/useNotification'
// Pages for Sign In Access
const LazyLogin = React.lazy(() => import('./Components/Pages/LogInPage/Login'))
const LazyRegister = React.lazy(() => import('./Components/Pages/LogInPage/Register'))
// Pages for User Access
const LazyUserHome = React.lazy(() => import('./Components/Pages/UserAccessPages/Home'))
const LazyGames = React.lazy(() => import('./Components/Pages/UserAccessPages/Games'))
const LazyRestaurant = React.lazy(() => import('./Components/Pages/UserAccessPages/Restaurant'))
const LazyLaundary = React.lazy(() => import('./Components/Pages/UserAccessPages/Laundary'))
const LazyBill = React.lazy(() => import('./Components/Pages/UserAccessPages/Bill'))
// Pages for Admin Access
const LazyAdmin = React.lazy(() => import('./Components/Pages/LogInPage/Admin'))
const LazyAdminHome = React.lazy(() => import('./Components/Pages/AdminAccessPages/AdminHome'))
const LazyAdminGame = React.lazy(() => import('./Components/Pages/AdminAccessPages/EditGames'))
const LazyAdminRestaurant = React.lazy(() => import('./Components/Pages/AdminAccessPages/EditRestaurant'))
const LazyAdminLaundary = React.lazy(() => import('./Components/Pages/AdminAccessPages/EditLaundary'))
const LazyAdminUser = React.lazy(() => import('./Components/Pages/AdminAccessPages/EditUser'))
// Page for Not Fount
const LazyNotFound = React.lazy(() => import('./Components/Pages/NotFound'))



function App() {
  const navigate = useNavigate()
  // uses for user Login
  const [userLoginName, setUserLoginName] = useState('')
  const [userLoginPassword, setUserLoginPassword] = useState('')
  // uses for register
  const [registerName, setRegisterName] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  // uses for admin Login
  const [adminName, setAdminName] = useState('')
  const [adminPassword, setAdminPassword] = useState('')
  
  // Fetching Admin Data
  const [admin, setAdmin, adminError] = useFetch("/admin")
  // Fetching User Data
  const [user, setUser, userError] = useFetch("/user")
  const [userLoggedData, setUserLoggedData, userLoggedError, loadingUserLogged] = useFetch("/userLogin")
  // Fetching for Hotal Features
  const [games, setGames, gameError] = useFetch('/game')
  const [restaurant, setRestaurant, restaurantError] = useFetch('/restaurant')
  const [laundary, setLaundary, laundaryError] = useFetch('/laundary')
  // Fetch User Lists
  const [userGames, setUserGames, userGameError] = useFetch("/userGame")
  const [userLaundary, setUserLaundary, userLaundaryError] = useFetch("/userLaundary")
  const [userRestaurant, setUserRestaurant, userRestaurantError] = useFetch("/userRestaurant")

  const adminLogin = async() => {

    const Admin = admin.find(admin => admin.userName===adminName)
    if (Admin){
      if (Admin.password === adminPassword) {
        navigate('/admin')
      } else {
        useNotification("Invalid Password")
      }
    } else{
      useNotification("Invalid UserId")
    }
  }

  const userLogin = async() => {
    const User = user.find(user => user.userName === userLoginName)
    if (User){
      if (User.password === userLoginPassword){
          const fetchLogin = async() => {
            try {
              const Id = '1';
              const User = userLoginName;
              const Password = userLoginPassword;
              const newUser = {id:Id, userName:User, password:Password}
              const response = await api.put(`/userLogin/${Id}`, newUser)
              setUserLoggedData(response.data)
              setUserLoginName('')
              setUserLoginPassword('')
              navigate('/user')
            } catch (err) {
              console.log(err.message);
            }
          }
          fetchLogin()
          useNotification('Successfully Login')
        } else {
          useNotification("Invalid Password")
      }
    }
    !User && alert("Invalid User");
  }
  const userRegister = async() => {
    const registation = async() => {
      try {
        const Id = user.length ? Number(user[user.length-1].id)+1 : 1;
        const User = registerName;
        const Password = registerPassword;
        const newUser = {id:String(Id), userName:User, password:Password}
        const response = await api.post('/user', newUser)
        const newList = [...user, response.data]
        setUser(newList)
        navigate('/')
        useNotification("Successfully Register")
      } catch (err) {
        console.log(err.message);
      }
    }
    registation()
  }
    // Add Laundary
    const laundaryList = async (cloth, amount) => {
      const Id = userLaundary.length ? Number(userLaundary[userLaundary.length-1].id)+1 : 1;
      const User = userLoggedData[0]?.userName;
      const Cloth = cloth;
      const Amount = amount;
      const newObj = {id:String(Id), user:User, cloth:Cloth, amount:Amount}
      const response = await api.post('/userLaundary', newObj);
      const newLaundary = [...userLaundary, response.data];
      setUserLaundary(newLaundary)
      useNotification(`Now you can clear your ${Cloth} cloth`);
    }
    
    // Add Games
    const gameList = async (game, amount) => {
      const Id = userGames.length ? Number(userGames[userGames.length-1].id)+1 : 1;
      const User = userLoggedData[0]?.userName;
      const Game = game;
      const Amount = amount;
      const newObj = {id:String(Id), user:User, game:Game, amount:Amount}
      const response = await api.post('/userGame', newObj);
      const newGames = [...userGames, response.data];
      setUserGames(newGames)
      useNotification(`Now you can play ${Game} game.`);
    }

    // Add Restaurant
    const restaurantList = async (food, amount) => {
      const Id = userRestaurant.length ? Number(userRestaurant[userRestaurant.length-1].id)+1 : 1;
      const User = userLoggedData[0]?.userName;
      const Food = food;
      const Amount = amount;
      const newObj = {id:String(Id), user:User, food:Food, amount:Amount}
      const response = await api.post('/userRestaurant', newObj);
      const newRestaurant = [...userRestaurant, response.data];
      setUserRestaurant(newRestaurant)
      useNotification(`Your ${Food} order is placed`);
    }
    const deleteRestaurantItem = async(id, item) => {
      useDeleteList('/userRestaurant', id, item)
    } 
    const deleteLaundaryItem = async(id, item) => {
      useDeleteList('/userLaundary', id, item)
    } 
    const deleteGameItem = async(id, item) => {
      useDeleteList('/userGame', id, item)
    }
    const logout = async() => {
      try {
        const Id = "1";
        const User = "";
        const Password = "";
        const removeUser = {id:Id, userName:User, password:Password}
        const response = await api.put(`/userLogin/${Id}`, removeUser)
        setUserLoggedData(response.data)
        navigate('/')
      } catch (err) {
        alert(err.message);
      }
    }
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='' element={<NavbarLogin navBar="SignInNavbar"/>}>
            <Route index element={
              <LazyLogin
                user={user}
                userError={userError}
                userLoginName={userLoginName}
                setUserLoginName={setUserLoginName}
                userLoginPassword={userLoginPassword}
                setUserLoginPassword={setUserLoginPassword}
                userLogin={userLogin}
                />
            }/>
            <Route path='register' element={
              <LazyRegister
                userError={userError}
                registerName={registerName}
                setRegisterName={setRegisterName}
                registerPassword={registerPassword}
                setRegisterPassword={setRegisterPassword}
                userRegister={userRegister}/>
            } />
            <Route path='adminLogin' element={
              <LazyAdmin
                adminError={adminError}
                adminName={adminName}
                setAdminName={setAdminName}
                adminPassword={adminPassword}
                setAdminPassword={setAdminPassword}
                adminLogin={adminLogin}/>
              }/>

          </Route>

          <Route path='user' element={<NavbarLogin  navBar="userNavbar" logout={logout}/>}>
            <Route index element={
              <LazyUserHome
                userLoggedData={userLoggedData}
                userLoggedError={userLoggedError}
                games={userGames}
                restaurant={userRestaurant}
                laundary={userLaundary}
                gameError={userGameError}
                restaurantError={userRestaurantError}
                laundaryError={userLaundaryError}
                loadingUserLogged={loadingUserLogged}
                deleteRestaurantItem={deleteRestaurantItem}
                deleteLaundaryItem={deleteLaundaryItem}
                deleteGameItem={deleteGameItem}/>
            }/>
            <Route path='game' element={<LazyGames games={games} gameList={gameList} userLoggedData={userLoggedData} gameError={gameError}/>} />
            <Route path='restaurant' element={<LazyRestaurant restaurant={restaurant} restaurantList={restaurantList} userLoggedData={userLoggedData} restaurantError={restaurantError}/>} />
            <Route path='laundary' element={<LazyLaundary laundary={laundary} laundaryList={laundaryList}  userLoggedData={userLoggedData} laundaryError={laundaryError}/>} />
            <Route path='bill' element={<LazyBill userLoggedData={userLoggedData} game={userGames} restaurant={userRestaurant} laundary={userLaundary} gameError={userGameError} restaurantError={userRestaurantError} laundaryError={userLaundaryError}/>}/>
          </Route>

          <Route path='admin' element={<NavbarLogin navBar="adminNavbar"/>}>
              <Route index element={<LazyAdminHome admin={admin}/>} />
              <Route path='game' element={<LazyAdminGame game={games} />} />
              <Route path='restaurant' element={<LazyAdminRestaurant restaurant={restaurant}/>} />
              <Route path='laundary' element={<LazyAdminLaundary laundary={laundary}/>} />
              <Route path='user' element={<LazyAdminUser user={user}/>} />
          </Route>
            <Route path='*' element={<LazyNotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App;