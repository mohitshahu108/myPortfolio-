import React from "react";

export default function Projects() {
  return (
    <>
      <div class="max-width max-width-70">
        <div class="logo">
          <div class="logo-inner">
            <a href="../">
              <div class="label-logo on-hover--40 text-color-white"></div>
            </a>
          </div>
        </div>
        <div class="top-bottom-margin animate">
          <a href="days/">
            <div class="on-hover-40 hide-text-block work-block">
              <h2 class="text-color-white">ProjectName</h2>
              <p class="size-small text-color-red">Short description</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
