import React from 'react';
import Navbar from './components/Navbar/Navbar.tsx';
import ProfileSection from './components/Profile-Section/ProfileSection';

const App = () => {

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <div className='App__first-column'>
        <ProfileSection background={{imageUrl: 'https://images.unsplash.com/photo-1564497717650-489eb99e8d09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1363&q=80', altText: 'background-image'}} profilePicture={{imageUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80', altText: 'pfp'}} name='John Doe' handle='@johndoe' tweets={250} followers={1700} following={100}/>
      </div>
    </div>
  );

}


export default App;
