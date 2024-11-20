import { Route, Routes, useNavigate } from 'react-router-dom';
import api from './api/apiUrl'; 
import { useEffect, useState } from 'react';

import { Admin } from './Components/LogInPage/Admin';
import { Login } from './Components/LogInPage/Login';
import { Register } from './Components/LogInPage/Register';

import { NavbarLogin } from './Components/Features/NavbarLogin';
import { UserNavbar } from './Components/Features/UserNavbar';

import { Dashboard } from './Components/Pages/Dashboard';
import { Home } from './Components/Pages/Home';
import { Restaurant } from './Components/Pages/Restaurant';
import { Laundary } from './Components/Pages/Laundary';
import { Games } from './Components/Pages/Games';
import { Bill } from './Components/Pages/Bill';
import { NotFound } from './Components/Pages/NotFound';

import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
  // const [userId, setUserId] = useState("")
  const [userLoginData, setUserLoginData] = useState([]);
  // User Games
  const [game, setGame] = useState([]);
  // User Restaurant
  const [restaurant, setRestaurant] = useState([]);
  // User Laundary
  const [laundary, setLaundary] = useState([]);
  // Model
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  
  // get the information in api and store
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await api.get('/admin');
        setAdmin(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    const fetchUser = async () => {
      try {
        const response = await api.get('/user');
        setUser(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    const fetchGame = async () => {
      try {
        const response = await api.get('/game');
        setGame(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    const fetchRestaurant = async () => {
      try {
        const response = await api.get('/restaurant');
        setRestaurant(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    const fetchLaundary = async () => {
      try {
        const response = await api.get('/laundary');
        setLaundary(response.data);
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
    if (Name[0] === adminName) {
      if (Name[0] === adminName && Password[0] === adminPassword) {
        alert("Sucsess")
        // navigate('/dashboard');
      } else {
        alert("Invalid: Password");
      }
    } else {
      handleOpen();
      setMessage("User Id: VikramKumar Password: Vikramveera28")
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
          const useUser = {id, name: userName, password}
          const response = await api.put(`/userLogin/${id}`, useUser);
          console.log(response);
          console.log(response.data);
          setUserLoginData(response.data)
          console.log(userLoginData);
        } catch (err) {
          console.log(err.message);
        }
      }
      fetchLogin();
      navigate('/user/home');
    } else {
      handleOpen()
      setMessage("Invalid credentials");
    }
  }
    // User registration function
    const userRegister = async (e) => {
      e.preventDefault();
      const id = user.length ? Number(user[user.length - 1].id) + 1 : 1;
      const userName = registerName;
      const password = registerPassword;
      const newList = {id:String(id), name:userName, password:password}
      const response = await api.post('/user', newList);
      const newUser = [...user, response.data]
      setUser(newUser);
      handleOpen()
      setMessage("Registration Complete");
      setRegisterName('')
      setRegisterPassword('')
      navigate("/")
    }


  // Get user informations when user Logged in
    useEffect(() => {
        const fetchUserDetails = async () => {
          try {
            const response = await api.get('/userLogin');
            setUserLoginData(response.data);
          } catch (err) {
            console.log('Error fetching user login data:', err.message);
          }
        };
        fetchUserDetails();
      }, [userLoginData]);


    // Add game
    const gameList = async (gName, gRate) => {
      const Id = game.length ? Number(game[game.length-1].id)+1 : 1;      
      const User = userLoginData[0]?.name;
      const Name = gName;
      const Rate = gRate;
      const newObj = {id:Id, user:User, gname:Name, grate:Rate}
      const response = await api.post('/game', newObj);
      const newGame = [...game, response.data];
      setGame(newGame)
    }

    // Add restaurant
    const restaurantList = async (rName, rRate) => {
      const Id = restaurant.length ? Number(restaurant[restaurant.length-1].id)+1 : 1;      
      const User = userLoginData[0]?.name;
      console.log(userLoginData);
      console.log(User);
      const Name = rName;
      const Rate = rRate;
      const newObj = {id:Id, user:User, ritem:Name, rrate:Rate}
      const response = await api.post('/restaurant', newObj);
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
      const response = await api.post('/laundary', newObj);
      const newLaundary = [...laundary, response.data];
      setLaundary(newLaundary)
    }

    // Delete Restaurant Item
    const deleteRestaurantItem = async (id) => {
      try {
        await api.delete(`/restaurant/${id}`)
      } catch (err) {
        console.log(err.message);
      }
    }

    // Delete Laundary Item
    const deleteLaundaryItem = async (id) => {
      try {
        await api.delete(`/laundary/${id}`)
      } catch (err) {
        console.log(err.message);
      }
    }
    
    // Delete Laundary Item
    const deleteGameItem = async (id) => {
      try {
        await api.delete(`/game/${id}`)
      } catch (err) {
        console.log(err.message);
      }
    }

  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<NavbarLogin />}>
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
            deleteRestaurantItem={deleteRestaurantItem}
            deleteLaundaryItem={deleteLaundaryItem}
            deleteGameItem={deleteGameItem}
          />}/>
          <Route path='bill' element={<Bill
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {message}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
