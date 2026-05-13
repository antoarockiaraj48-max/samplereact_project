import {
  FaLinkedin,
  FaGithub,
  FaGlobe
} from "react-icons/fa";

function TrainerPreview({
  trainerData
}) {

  return (

    <div className="preview-section">

      <h2 className="section-title">
        Trainer Preview
      </h2>

      <div className="preview-card">

        {/* PROFILE IMAGE */}
        <img
          src={trainerData.profileImage}
          alt="trainer"
          className="preview-image"
        />

        {/* NAME */}
        <h2>
          {trainerData.name}
        </h2>

        {/* SPECIALIZATION */}
        <p className="specialization">
          {trainerData.specialization}
        </p>

        {/* EXPERIENCE */}
        <div className="experience-badge">

          {trainerData.experience}
          {" "}
          Experience

        </div>

        {/* INFO SECTION */}
        <div className="preview-info">

          {/* BIO */}
          <div className="info-card">

            <h4>
              About Trainer
            </h4>

            <p>
              {trainerData.bio}
            </p>

          </div>

          {/* SKILLS */}
          <div className="info-card">

            <h4>
              Skills
            </h4>

            <p>
              {trainerData.skills}
            </p>

          </div>

          {/* COURSE */}
          <div className="info-card">

            <h4>
              Course Assigned
            </h4>

            <p>
              {trainerData.course}
            </p>

          </div>

        </div>
      {/* ================= SOCIAL LINKS ================= */}

<div className="info-card">

  <h4>
    Professional Links
  </h4>

  <div className="social-links">

    <a href="/">
      <FaLinkedin />
    </a>

    <a href="/">
      <FaGithub />
    </a>

    <a href="/">
      <FaGlobe />
    </a>

  </div>

</div>

        {/* STATUS */}
        <div
          className={`active-status ${
            trainerData.isActive
              ? "active"
              : "inactive"
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