

function TrainerPreview({ trainerData }) {
  return (
    <div className="preview-section">
      <h2 className="section-title">Trainer Preview</h2>

      <div className="preview-card">
        {/* PROFILE IMAGE */}
        {trainerData.profileImagePreview && (
          <img
            src={trainerData.profileImagePreview}
            alt="Preview"
            width="150"
          />
        )}

        {/* NAME */}
        <h2>{trainerData.name}</h2>

        {/* SPECIALIZATION */}
        <p className="specialization">{trainerData.specialization}</p>

        {/* EXPERIENCE */}
        <div className="experience-badge">
          {trainerData.experience} Experience
        </div>

        {/* INFO */}
        <div className="preview-info">
          <div className="info-card">
            <h4>About Trainer</h4>

            <p>{trainerData.bio}</p>
          </div>

          <div className="info-card">
            <h4>Skills</h4>

            <p>{trainerData.skills}</p>
          </div>

          <div className="info-card">
            <h4>Course Assigned</h4>

            <p>{trainerData.course}</p>
          </div>
        </div>

       {/* EMAIL */}
       <div className="email">
        <h4>E-Mail</h4>
        <p>{trainerData.email}</p>

       </div>

       {/*PHONE */}
       <div className="phone">
        <h4>Phone</h4>
        <p>{trainerData.phone}</p>
       </div>

        {/* STATUS */}
        <div
          className={`active-status ${
            trainerData.isActive ? "active" : "inactive"
          }`}
        >
          {trainerData.isActive
            ? "● Active Instructor"
            : "● Inactive Instructor"}
        </div>
      </div>
    </div>
  );
}

export default TrainerPreview;
