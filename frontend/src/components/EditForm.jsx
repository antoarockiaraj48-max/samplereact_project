import axios from "axios";

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
        profileImage: file,
        profileImagePreview: URL.createObjectURL(file)
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
        document: file,
      });

    }

  };

  const handleSubmit = async () => {

  const formData = new FormData();

  formData.append(
    "name",
    trainerData.name
  );

  formData.append(
    "email",
    trainerData.email
  );

  formData.append(
    "phone",
    trainerData.phone
  );

  formData.append(
    "specialization",
    trainerData.specialization
  );

  formData.append(
    "experience",
    trainerData.experience
  );

  formData.append(
    "course",
    trainerData.course
  );

  formData.append(
    "skills",
    trainerData.skills
  );

  formData.append(
    "bio",
    trainerData.bio
  );

formData.append(
  "isactive",
  trainerData.isActive ? "true" : "false"
);
  // IMPORTANT
  if (trainerData.profileImage) {

  formData.append(
    "profile_image",
    trainerData.profileImage
  );

}

if (trainerData.document) {

  formData.append(
    "document",
    trainerData.document
  );

}

  try {

    const response = await axios.post(
      "http://127.0.0.1:8000/api/addtrainer/",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(response.data);

    if (response.status === 201 || response.status === 200) {

      alert("Trainer Added Successfully");

    }

  } catch (error) {

    console.log(error);

    if (error.response) {

      console.log(error.response.data);

    }

    alert("Error Adding Trainer");

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

              <option value="">
                Select Specialization
              </option>

              <option value="Frontend Development">
                Frontend Development
              </option>

              <option value="Backend Development">
                Backend Development
              </option>

              <option value="UI/UX Design">
                UI/UX Design
              </option>

              <option value="Data Science">
                Data Science
              </option>

              <option value="Cyber Security">
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

          {/* DOCUMENT */}
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

        {/* STATUS */}
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
            onClick={handleSubmit}
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