import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import "../../stylesheets/components/navbar.scss";

const Navbar = ({ companyLinks, seekerLinks }) => {
  const [company, setCompany] = useState();
  // Object Schema Validator
  //   const RegisterSchema = Yup.object().shape({
  //     IsCompany: Yup.boolean().oneOf([true, false])

  //   });

  //   console.log("name", RegisterSchema);
  //   console.log("NAME", Yup.object().shape({
  //     IsCompany: Yup.boolean().oneOf([true, false]))
  //   export const axiosAuth = () => {
  //     const token = localStorage.getItem("token");
  //     console.log(token);
  //     return axios.create({
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `${token}`
  //       },
  //       baseURL: "https://jobdroom.herokuapp.com"
  //     });
  //     console.log(`${token}`);
  //   };
  const handleNav = event => {
    event.preventDefault();
    axios.post("https://jobdroom.herokuapp.com/api/auth/register").then(res => {
      const token = res.data.token;
      window.localStorage.setItem("token", token);
    });
  };

  return (
    <div>
      {company ? (
        <nav className="navbar-companies">
          {companyLinks.map((l, idx) => (
            <NavLink key={idx} to={`/${l.toLowerCase()}/`}>
              {l}
            </NavLink>
          ))}
        </nav>
      ) : (
        <nav className="navbar-seekers">
          {seekerLinks.map((l, idx) => (
            <NavLink key={idx} to={`/${l.toLowerCase()}/`}>
              {l}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
};
export default Navbar;
