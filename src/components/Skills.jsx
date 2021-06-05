import React from "react";
import HorizontalBarChart from "./HorizontalBarChart";

export default function Skills() {
  return (
    <>
      <div class="top-bottom-margin max-width-70">
        <div class="logo">
          <div class="logo-inner">
            <a href="../">
              <div class="label-logo on-hover--40 text-color-white"></div>
            </a>
          </div>
        </div>
        <div class="hide-text-block">
          <h2 class="text-color-white animate">My Skills</h2>
        </div>
        <div class="top-bottom-margin animate">
          <ul>
          <HorizontalBarChart />            
          </ul>
        </div>
      </div>
    </>
  );
}
