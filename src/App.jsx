// import { Button } from "react-bootstrap";
import { useState } from "react";
function App() {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    favorite_language: "",
    stars: 0,
  };
  const [info, setInfo] = useState(initialValues);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const newInfo = { ...info, [name]: value };
    setInfo(newInfo);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newSubmission = { ...info, stars: parseInt(info.stars) };
    console.log(newSubmission);
    setInfo(initialValues);
  }

  return (
    <div className="container py-4 px-3 mx-auto">
      <h2>Form & Table Practice</h2>
      <h4 style={{ textTransform: "uppercase" }}>Hotel Sage Breeze</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">
            First Name
          </label>
          <input
            name="first_name"
            id="first_name"
            value={info.first_name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="last_name">
            Last Name
          </label>
          <input
            className="form-control"
            type="text"
            value={info.last_name}
            name="last_name"
            id="last_name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            id="email"
            name="email"
            type="email"
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={info.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-floating">
          <select
            className="form-select"
            id="stars"
            name="stars"
            value={info.stars}
            onChange={handleChange}
          >
            {/* <option selected>Star Rating</option> */}
            <option value={4}>⭐️⭐️⭐️⭐️</option>
            <option value={3}>⭐️⭐️⭐️</option>
            <option value={2}>⭐️⭐️</option>
            <option value={1}>⭐️</option>
          </select>
          <label htmlFor="stars">How as your experience?</label>
        </div>
        {/* <label htmlFor="favorite_language">Favorite Language</label> */}
        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
}

export default App;
