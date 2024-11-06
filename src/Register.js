import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import closeeyeimg from "./assets/password-eye-icon.png";
import openeyeimg from "./assets/open-eye.png";
import "./index.css";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmpass: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({}); // State to hold error messages
  const navigate = useNavigate();

  const handleRegister = () => {
    const newErrors = {};
    let hasErrors = false;

    // Check for empty fields and set appropriate error messages
    if (!values.name) {
      newErrors.name = "Name is required.";
      hasErrors = true;
    }
    if (!values.email) {
      newErrors.email = "Email is required.";
      hasErrors = true;
    }
    if (!values.password) {
      newErrors.password = "Password is required.";
      hasErrors = true;
    }
    if (!values.confirmpass) {
      newErrors.confirmpass = "Confirm Password is required.";
      hasErrors = true;
    }

    // If any field is empty, display errors
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Validate password length and match
    if (values.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
      setErrors(newErrors);
      return;
    }
    if (values.password !== values.confirmpass) {
      newErrors.confirmpass = "Passwords do not match.";
      setErrors(newErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    // Log values to the console when the user submits the form
    console.log("Form Values:", values);
    
    // Store user data in local storage
    localStorage.setItem("user", JSON.stringify(values));

    // Reset form values after successful registration
    setValues({
      name: "",
      email: "",
      password: "",
      confirmpass: ""
    });

    // Navigate to login page
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });

    // Clear specific error for the changed field if it's filled
    if (value && errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }

    // Log each updated value to the console
    console.log("Updated Values:", { ...values, [name]: value });
  };

  const togglePasswordVisibility = (type) => {
    if (type === "password") {
      setShowPassword(!showPassword);
    } else if (type === "confirmpass") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="container bg-light p-5 rounded" style={{ width: "400px" }}>
        <h1>Register Form</h1>
        <div>
          <label>Name:</label>
          <br />
          <input
            className="form-control"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-danger">{errors.name}</p>} {/* Display error message for name */}
        </div>
        <div>
          <label>Email:</label>
          <br />
          <input
            className="form-control"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-danger">{errors.email}</p>} {/* Display error message for email */}
        </div>
        <div>
          <label>Password:</label>
          <br />
          <div className="eye">
            <img
              onClick={() => togglePasswordVisibility("password")}
              src={showPassword ? openeyeimg : closeeyeimg}
              alt="Toggle Password Visibility"
            />
            <input
              className="form-control"
              name="password"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          {errors.password && <p className="text-danger">{errors.password}</p>} {/* Display error message for password */}
        </div>
        <div>
          <label>Confirm Password:</label>
          <br />
          <div className="eye">
            <img
              onClick={() => togglePasswordVisibility("confirmpass")}
              src={showConfirmPassword ? openeyeimg : closeeyeimg}
              alt="Toggle Confirm Password Visibility"
            />
            <input
              className="form-control"
              name="confirmpass"
              type={showConfirmPassword ? "text" : "password"}
              value={values.confirmpass}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </div>
          {errors.confirmpass && <p className="text-danger">{errors.confirmpass}</p>} {/* Display error message for confirm password */}
        </div>
        <button className="btn btn-dark" onClick={handleRegister}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;
