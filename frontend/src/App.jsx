import "./App.css";
import { useState } from "react";
import "./components/TrainerPreview";
import "./components/EditForm";

import EditForm from "./components/EditForm";
import TrainerPreview from "./components/TrainerPreview";

function App() {

  const [trainerData, setTrainerData] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    experience: "",
    skills: "",
    bio: "",
    course: "",
    isActive: true,
    profileImage:null,
    profileImagePreview: null,
    document:null,
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