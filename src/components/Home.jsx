import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  
    

  return (
    <>
      <div className="hide-mobile mobile-tap-area ">
        <div className="max-width">
          <div className="vertical-center">
            <h1>
              <div className="text-color-white hide-text-block">
                <div className="animate toggle-mobile-first">Hello.</div>
              </div>
              <div className="text-color-red hide-text-block">
                <div className="animate delay04 toggle-mobile-first">I am</div>
              </div>
              <div className="text-color-red hide-text-block">
                <div className="animate delay08 toggle-mobile-first">Mohit</div>
              </div>
            </h1>
          </div>
        </div>
        <div className="tap-indication">Tap anywhere</div>
      </div>

      <div className="max-width">
        <div className="vertical-center">
          <h1>
            <div className="hide-text-block">
              <Link to="/about">
                <div className="animate text-color-white on-hover-40 hide-web label-hello "></div>
                <div className="animate text-color-white on-hover-40 hide-mobile toggle-mobile-second">
                  About
                </div>
              </Link>
            </div>
            <div className="hide-text-block">
              <Link to="/projects">
                <div className="animate text-color-red on-hover-40 delay04 hide-web label-iam"></div>
                <div className="animate text-color-red on-hover-40 delay04 hide-mobile toggle-mobile-second">
                  Work
                </div>
              </Link>
            </div>
            <div className="hide-text-block">
              <Link to="contact/">
                <div className="animate text-color-red on-hover-40 delay08 hide-web label-dejan"></div>
                <div className="animate text-color-red on-hover-40 delay08 hide-mobile toggle-mobile-second">
                  Contact
                </div>
              </Link>
            </div>
          </h1>
        </div>
      </div>
      <div className="bg-photo fade-in"></div>
    </>
  );
}
