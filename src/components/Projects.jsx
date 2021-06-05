import React, { useState, useEffect } from "react";
import sanityClient from "../client";

export default function Projects() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project']{
      title, link, description
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  console.log(projectData);
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
          <ul>
            {projectData.map((project, index) => {
              const { title, link, description } = project;
              return (
                <li key={index}>
                  <a href={link} target="_blank" rel="noreferrer">
                    <div class="on-hover-40 hide-text-block work-block">
                      <h2 class="text-color-white">{title}</h2>
                      <p class="size-small text-color-red">{description}</p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
