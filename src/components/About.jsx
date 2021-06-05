import React from "react";
import { Link } from "react-router-dom";
import pdfFile from './../file/MohitShahu_Resume.pdf'
export default function About() {
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
          <h2 class="text-color-white animate">
            I design & build digital products
          </h2>
        </div>
        <div class="hide-text-block">
          <Link to="/skills" class="text-color-white animate">
            <h2 class="text-color-white animate">Myskills 👉</h2>
          </Link>
        </div>
      </div>
      <div class="max-width-70 text-color-white">
        <h4>About</h4>
        <p class="size-large">Hi, I’m Mohit Shahu.</p>
        <p>
          You can also call me a product designer, front-end developer, music
          enthusiast, traveler, photographer and more.
        </p>
        <p>
          I don’t like to define myself by the work I’ve done. I define myself
          by the work I want to do. Skills can be taught, personality is
          inherent. I prefer to keep learning, continue challenging myself, and
          do interesting things that matter.
        </p>
        <p>
          Fueled by high energy levels and boundless enthusiasm, I’m easily
          inspired and more then willing to follow my fascinations wherever they
          take me. I’m passionate, expressive, multi-talented spirit with a
          natural ability to entertain and inspire. I’m never satisfied to just
          come up with ideas. Instead I have an almost impulsive need to act on
          them.
        </p>
        <p>
          My abundant energy fuels me in the pursuit of many interests, hobbies,
          areas of study and artistic endeavors. I’m a fast learner, able to
          pick up new skills and juggle different projects and roles with
          relative ease.
        </p>
        <p>
          I like to develop expertise in a number of areas over the course of my
          life and career. My personality type is . I currently work remotely
          with a selected freelance client base and are open for new
          opportunities.
        </p>

        <div class="links" data-aos="fade-up">
          <div
            class="on-hover-40 text-color-red pointer"
            onClick={() => window.open(pdfFile)}
          >
            My resume (pdf 109kb){" "}
          </div>
        </div>
      </div>
    </>
  );
}
