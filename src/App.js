import { LoginButton } from './Login';
import { LogoutButton } from './Logout';
import { Profile } from './Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Course from './components/Course';

function App() {
  const { isAuthenticated } = useAuth0()

  if(isAuthenticated){
    return <Course/>
  }
  return (
    <div>
        <h1>Bienvenidos al curso de React query</h1>

        {isAuthenticated ? <>
          <Profile />
          <LogoutButton />
        </>
          :
          <LoginButton />
        }
      <main>
        //todo
      </main>
    </div>
  );
}

export default App;
