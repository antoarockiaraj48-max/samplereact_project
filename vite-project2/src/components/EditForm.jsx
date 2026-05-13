function EditForm({
  trainerData,
  setTrainerData
}) {

  const handleChange = (e) => {

    const { name, value } = e.target;

    setTrainerData({
      ...trainerData,
      [name]: value,
    });

  };

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      setTrainerData({
        ...trainerData,
        profileImage: URL.createObjectURL(file),
      });

    }

  };

  const toggleStatus = () => {

    setTrainerData({
      ...trainerData,
      isActive: !trainerData.isActive,
    });

  };

  const handleDocumentChange = (e) => {

  const file = e.target.files[0];

  if (file) {

    setTrainerData({
      ...trainerData,
      document: file.name,
    });

  }

};

  return (

    <div className="form-section">

      <h2 className="section-title">
        Edit Trainer
      </h2>

      <form>

        <div className="form-grid">

          {/* PROFILE IMAGE */}
          <div className="input-group full-width">

            <label>
              Profile Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />

          </div>

          {/* NAME */}
          <div className="input-group">

            <label>
              Name
            </label>

            <input
              type="text"
              name="name"
              value={trainerData.name}
              onChange={handleChange}
              placeholder="Enter trainer name"
            />

          </div>

          {/* EMAIL */}
          <div className="input-group">

            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              value={trainerData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />

          </div>

          {/* PHONE */}
          <div className="input-group">

            <label>
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={trainerData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />

          </div>

          {/* SPECIALIZATION */}
          <div className="input-group">

            <label>
              Specialization
            </label>

            <select
              name="specialization"
              value={trainerData.specialization}
              onChange={handleChange}
            >

              <option>
                Frontend Development
              </option>

              <option>
                Backend Development
              </option>

              <option>
                UI/UX Design
              </option>

              <option>
                Data Science
              </option>

              <option>
                Cyber Security
              </option>

            </select>

          </div>

          {/* EXPERIENCE */}
          <div className="input-group">

            <label>
              Experience
            </label>

            <input
              type="text"
              name="experience"
              value={trainerData.experience}
              onChange={handleChange}
              placeholder="5 Years"
            />

          </div>

          {/* COURSE */}
          <div className="input-group">

            <label>
              Course Assigned
            </label>

            <input
              type="text"
              name="course"
              value={trainerData.course}
              onChange={handleChange}
              placeholder="Enter course"
            />

          </div>

          {/* SKILLS */}
          <div className="input-group full-width">

            <label>
              Skills
            </label>

            <input
              type="text"
              name="skills"
              value={trainerData.skills}
              onChange={handleChange}
              placeholder="React, JavaScript..."
            />

          </div>

          {/* DOCUMENT UPLOAD */}
<div className="input-group full-width">

  <label>
    Upload Documents
  </label>

  <input
    type="file"
    accept=".pdf,.doc,.docx"
    onChange={handleDocumentChange}
  />

</div>

          {/* BIO */}
          <div className="input-group full-width">

            <label>
              Bio / About
            </label>

            <textarea
              rows="5"
              name="bio"
              value={trainerData.bio}
              onChange={handleChange}
              placeholder="Write trainer bio..."
            ></textarea>

          </div>

        </div>

        {/* STATUS TOGGLE */}
        <div className="status-box">

          <p>
            {trainerData.isActive
              ? "Trainer Active"
              : "Trainer Inactive"}
          </p>

          <div
            className={`toggle ${
              trainerData.isActive
                ? "active"
                : ""
            }`}
            onClick={toggleStatus}
          >

            <div className="toggle-circle"></div>

          </div>

        </div>

        {/* BUTTONS */}
        <div className="button-group">

          <button
            type="button"
            className="update-btn"
          >
            Update Profile
          </button>

          <button
            type="button"
            className="delete-btn"
          >
            Delete Trainer
          </button>

        </div>

      </form>

    </div>

  );

}

export default EditForm;