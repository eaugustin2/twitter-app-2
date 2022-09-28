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
        <ProfileSection />
      </div>
    </div>
  );

}


export default App;
