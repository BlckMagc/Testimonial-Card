import React from "react"
import "./App.css"
import profPicture from "./assets/profile-thumbnail.png"

function App() {

  return (
    <section className="App">
  <div className="card-container">
    <div className="profile-header">
      <img src={profPicture} alt="Profile" className="profile-picture" />
      <div className="profile-text">
        <h2 className="name">Sara Dolce</h2>
        <h3 className="userName">@saradole</h3>
      </div>
    </div>
        <p className="status">
          I've been searching for high-quality abstract images for my design projects,
          and I'm thrilled to have found this platform.
          The variety and depth of creativity are astounding!
        </p>
     </div>
    </section>
  )
}

export default App
