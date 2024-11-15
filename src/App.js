import { Route, Routes, useNavigate } from 'react-router-dom';
import adminApi from './api/adminUrl';
import userApi from './api/userUrl';
import gameApi from './api/gamesUrl';
import { useEffect, useState } from 'react';
import { Admin } from './Components/LogInPage/Admin';
import { Login } from './Components/LogInPage/Login';
import { Navbar } from './Components/Features.jsx/Navbar';
import { Dashboard } from './Components/Pages/Dashboard';
import { Register } from './Components/LogInPage/Register';
import { Home } from './Components/Pages/Home';
import { Games } from './Components/Pages/Games';
import { Laundary } from './Components/Pages/Laundary';
import { Restaurant } from './Components/Pages/Restaurant';
import { NotFound } from './Components/Pages/NotFound';
import { UserNavbar } from './Components/Features.jsx/UserNavbar';

function App() {
  const navigate = useNavigate();
  // All Admins
  const [admin, setAdmin] = useState([]);
  // All Users
  const [user, setUser] = useState([]);
  // Admin Login
  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  // User Login
  const [userLoginName, setUserLoginName] = useState('');
  const [userLoginPassword, setUserLoginPassword] = useState('');
  // User Registration
  const [registerName, setRegisterName] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  // User data
  const [userId, setUserId] = useState("")
  const [userLoginData, setUserLoginData] = useState([]);
  // User Games
  const [game, setGame] = useState([]);
  // User Restaurant
  const [restaurant, setRestaurant] = useState([]);
  // User Laundary
  const [laundary, setLaundary] = useState([]);
  
  
  // get the information in api and store
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await adminApi.get('/admin');
        setAdmin(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    const fetchUser = async () => {
      try {
        const response = await userApi.get('/user');
        setUser(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    const fetchGame = async () => {
      try {
        const response = await gameApi.get('/game');
        setGame(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    const fetchRestaurant = async () => {
      try {
        const response = await gameApi.get('/restaurant');
        setRestaurant(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    const fetchLaundary = async () => {
      try {
        const response = await gameApi.get('/laundary');
        setLaundary(response.data);
        // console.log(response.data);
        // console.log(laundary);
        
      } catch (err) {
        console.log(err.message);
      }
    }
    
    fetchUser();
    fetchAdmin();
    fetchGame();
    fetchRestaurant();
    fetchLaundary();
  }, []);


  // Admin Login Function
  const adminLogin = (e) => {
    e.preventDefault();    
    const Name = admin.map(admin => admin.name);
    const Password = admin.map(admin => admin.password);    
    if (Name[0] === adminName && Password[0] === adminPassword) {
      // navigate('/dashboard');
    } else {
      console.log("Invalid login");
    }
  }

  // User Login Function
  const userLogin = (e) => {
    e.preventDefault();    
    const User = user.find(user => user.name === userLoginName);    
    if (User && User.password === userLoginPassword) {
      const fetchLogin = async () => {
        try {
          const id = "1";
          const userName = userLoginName;
          const password = userLoginPassword;
          const useUser = {id, name: userName, password};
          const response = await userApi.put(`/userLogin/${id}`, useUser);
          setUserId(response.data)
        } catch (err) {
          console.log(err.message);
        }
      }
      fetchLogin();
      navigate('/user/home');
    } else {
      console.log("Invalid credentials");
    }
  }
    // User registration function
    const userRegister = async (e) => {
      e.preventDefault();
      const id = user.length ? Number(user[user.length - 1].id) + 1 : 1;
      const userName = registerName;
      const password = registerPassword;
      const newList = {id:String(id), name:userName, password:password}

      const response = await userApi.post('/user', newList);
      const newUser = [...user, response.data]
      setUser(newUser);
    }


  // Get user informations when user Logged in
    useEffect(() => {
        const fetchUserDetails = async () => {
          try {
            const response = await userApi.get('/userLogin');
            setUserLoginData(response.data);
          } catch (err) {
            console.log('Error fetching user login data:', err.message);
          }
        };
        fetchUserDetails();
      }, [userId]);


    // Add game
    const gameList = async (gName, gRate) => {
      const Id = game.length ? Number(game[game.length-1].id)+1 : 1;      
      const User = userLoginData[0]?.name;
      const Name = gName;
      const Rate = gRate;
      const newObj = {id:Id, user:User, gname:Name, grate:Rate}
      const response = await gameApi.post('/game', newObj);
      const newGame = [...game, response.data];
      setGame(newGame)
    }

    // Add restaurant
    const restaurantList = async (rName, rRate) => {
      const Id = restaurant.length ? Number(restaurant[restaurant.length-1].id)+1 : 1;      
      const User = userLoginData[0]?.name;
      const Name = rName;
      const Rate = rRate;
      const newObj = {id:Id, user:User, ritem:Name, rrate:Rate}
      const response = await gameApi.post('/restaurant', newObj);
      const newRestaurant = [...restaurant, response.data];
      setRestaurant(newRestaurant)
    }

    // Add Laundary
    const laundaryList = async (lName, lRate) => {
      const Id = laundary.length ? Number(laundary[laundary.length-1].id)+1 : 1;
      const User = userLoginData[0]?.name;
      const Name = lName;
      const Rate = lRate;
      const newObj = {id:Id, user:User, litem:Name, lrate:Rate}
      const response = await gameApi.post('/laundary', newObj);
      const newLaundary = [...laundary, response.data];
      setLaundary(newLaundary)
    }
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={
            <Login
              user={user}
              userLoginName={userLoginName}
              setUserLoginName={setUserLoginName}
              userLoginPassword={userLoginPassword}
              setUserLoginPassword={setUserLoginPassword}
              userLogin={userLogin}
            />
          }/>
          <Route path='/register' element={
            <Register
              registerName = {registerName}
              setRegisterName={setRegisterName}
              registerPassword = {registerPassword}
              setRegisterPassword={setRegisterPassword}
              userRegister={userRegister}
            />}
          />
          <Route path='/admin' element={
            <Admin
              admin={admin}
              adminName={adminName}
              setAdminName={setAdminName}
              adminPassword={adminPassword}
              setAdminPassword={setAdminPassword}
              adminLogin={adminLogin}
            />
          }/>
        </Route>
        <Route path='/user' element={<UserNavbar />}>
          <Route path='home' element={<Home
            userLoginData = {userLoginData}
            game = {game}
            restaurant = {restaurant}
            laundary = {laundary}
          />}/>
          <Route path='game' element={<Games gameList={gameList} game={game}/>}/>
          <Route path='laundary' element={<Laundary laundaryList={laundaryList}/>}/>
          <Route path='restaurant' element={<Restaurant restaurantList={restaurantList}/>}/>
        </Route>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
