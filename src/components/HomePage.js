import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/components/homepage.scss";

const HomePage = () => {
  return (
    <main>
      {/* <img
        src="https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80"
        alt="night sky"
      /> */}
      <section className="intro">
        <h2 classname="h2">Welcome to Droom </h2>
      </section>

      <div>
        <div className="services">
          <div className="service-one">
            <p className="service-icon">
              <i className="far fa-calendar-alt"></i>
            </p>
            <p className="service-title">Register Your Account!</p>
            <p></p>
          </div>
          <div className="service-two">
            <p className="service-icon">
              <i className="fas fa-crop"></i>
            </p>
            <p className="service-title">Browse Job Listings!</p>
            <p></p>
          </div>
          <div className="service-three">
            <p className="service-icon">
              <i className="fas fa-code"></i>
            </p>
            <p className="service-title">Find Your Company!</p>
            <p></p>
          </div>
        </div>
      </div>

      {/* <section>
        <h2>Our Mission</h2>
        <div>
          <p>
            Integer sit amet venenatis erat. Cras elementum tortor odio, sit
            amet euismod nunc cursus ut. Donec sollicitudin orci sed enim
            volutpat, volutpat rutrum magna semper. Fusce leo lacus, pulvinar
            sit amet dignissim in, consectetur eget nulla. Etiam ac turpis
            augue. Sed tincidunt pulvinar tincidunt. Integer ac blandit magna.
            Nulla dapibus convallis luctus.{" "}
          </p>
          <p>
            Ut elementum urna sit amet elit egestas hendrerit. Vivamus quis sem
            fringilla, tincidunt nisi non, congue libero. Etiam cursus nulla
            quis sapien varius, eget accumsan augue mattis. Cras accumsan sapien
            nulla, eu eleifend odio tempus sit amet. Suspendisse gravida
            hendrerit sapien, ut molestie mi pellentesque eget. Aliquam eleifend
            velit vel libero elementum, vitae consectetur nisl sollicitudin.
            Suspendisse volutpat fringilla vehicula.
          </p>
        </div>
      </section> */}

      {/* <section>
        <h2>Let's Get Started</h2>
        <div>
          <p>Register for an account and let's get matching!</p>
        </div>
      </section> */}
    </main>
  );
};

export default HomePage;
