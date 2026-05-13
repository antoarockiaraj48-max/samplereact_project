import "./App.css";
import { useState } from "react";
import "./components/TrainerPreview";
import "./components/EditForm";

import EditForm from "./components/EditForm";
import TrainerPreview from "./components/TrainerPreview";

function App() {

  const [trainerData, setTrainerData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    specialization: "Frontend Development",
    experience: "5 Years",
    skills: "React, JavaScript, HTML, CSS",
    bio: "Passionate instructor helping students learn frontend development.",
    course: "React Frontend Mastery",
    isActive: true,
    profileImage: "src/assets/ratatouille.jpg",
    document:"",
  });

  return (

    <div className="page">

    
      <div className="topbar">

  <div className="title-box">
    <h1>Edit Trainer Profile</h1>
    
  </div>

  <div className="admin-badge">
    Admin Dashboard
  </div>

</div>

      <div className="main-container">

        {/* LEFT SIDE */}
        <EditForm
          trainerData={trainerData}
          setTrainerData={setTrainerData}
        />

        {/* RIGHT SIDE */}
        <TrainerPreview
          trainerData={trainerData}
        />

      </div>

    </div>

  );
}

export default App;