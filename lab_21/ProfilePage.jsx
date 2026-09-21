import React from 'react'

function ProfilePage({ currentUser, handleLogout }) {
  return (
  <>
        <h1>Profile Page</h1>
        <h1>userName : {currentUser}
        </h1>
        <button onClick={handleLogout}>Logout</button>   
  </>
  )
}

export default ProfilePage
