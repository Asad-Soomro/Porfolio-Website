import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Soomro | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="p-4 max-w-[940px] mx-auto pt-[120px]">
        <div className="bg-[#d0d4d6] my-4 p-4 w-full">
          <div className=" flex justify-between items-center">
            <h2 className="text-center">Asad Soomro</h2>
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/asadsoomro00/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
              </a>
              <a
                href="https://github.com/Asad-Soomro"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={20} style={{ marginRight: "1rem" }} />
              </a>
            </div>
          </div>
          <p>Deep Learning Engineer</p>
        </div>
        

        {/* Skills */}

        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Deep Learning: </span>
            Python
            <span className="px-2">|</span>Pytorch
            <span className="px-2">|</span>TensorFlow
            <span className="px-2">|</span>Keras
          </p>

          <p className="py-2">
            <span className="font-bold">Front-End: </span>
            HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> RESTAPI
          </p>

          <p className="py-2">
            <span className="font-bold">Back-End: </span>
            Django
            <span className="px-2">|</span>Node Js
            <span className="px-2">|</span>GraphQL
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
          </p>

          <p className="py-2">
            <span className="font-bold">Tools: </span>
            Power Bi
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">AimFit</span>
            <span className="px-2">|</span>Lahore, Pk
          </p>
          <p className="py-1 italic">
            Software Engineer & Web Master (Sept'22 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>

            <li>
              Platform migration from JavaScript to TypeScript and ensuring a
              smooth migration process.
            </li>
            <li>Introducing new features to the webapp</li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Deep Learning Engineer Intern
            </span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">Motive (Jun'22 - Sep'22)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Designed and Deployed Gaussian Mixture Model (Probabilistic Model)
              to predict unsafe driving with an accuracy of 92%
            </li>
            <li>
              Increased the accuracy of the state machine by 5% for event
              detection using a lightweight attention-based model
            </li>
            <li>
              Presented state-of-the-art Deep Learning modules like Visual
              Transformer, LSTM, etc
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Research Assistant Deep Learning</span>
            <span className="px-2">|</span>Lahore, Pk
          </p>
          <p className="py-1 italic">
            Lahore University Of Management Sciences (Jan'22 – May'22)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Transferred existing student-teacher model from TensorFlow to
              PyTorch
            </li>
            <li>
              Reduced the size and number of Flops by 4% and 10%, respectively,
              of the Student-Teacher compression mechanism
            </li>
            <li>
              Debugged and improved the accuracy of student-teacher using GANs
              compression model by 1%
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Research Assistant Natural Language Processing</span>
            <span className="px-2">|</span>Lahore, Pk
          </p>
          <p className="py-1 italic">
            Lahore University Of Management Sciences (Sept'21 – Dec'21)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
            Researching with Dr. Agha Ali Raza on the NPL Emotion Recognition using various
            speech components
            (old/new) with the long-term goal of developing an Empathetic virtual assistant to
            support humancomputer
            interaction in real-world applications
            </li>
          </ul>
        </div>

        {/* Skills */}
        <h5 className="text-center underline text-[18px] py-4">
          Certification
        </h5>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">PROFESSIONAL DATA SCIENTIST</span>
            <span className="px-2">|</span>DataCamp
          </p>
        </div>

        {/* Awards */}

        <h5 className="text-center underline text-[18px] py-4">
          Awards
        </h5>
        <div className="py-6">
        <ul>
          <p className="italic">
            <span className="font-bold">Dean's Honour List</span>
          </p>
        </ul>

        </div>


      </div>
    </>
  );
};

export default resume;
