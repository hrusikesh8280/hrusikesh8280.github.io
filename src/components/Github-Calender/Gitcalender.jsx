import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Gitcalender.css";

const Gitcalender = () => {
  return (
    <div className="Github">
      <div className="github">
        <div className="react-activity-calendar ">
          <div className="container mx-auto">
            <div className="py-10 px-4 sm:px-6 lg:px-8">
              <h1 className="text-white text-4xl  mb-10">
                Github <strong className="text-purple-500">Stats</strong>
              </h1>
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="w-full sm:w-1/2 mb-10">
                  <GitHubCalendar
                    username="hrusikesh8280"
                    blockSize={15}
                    blockMargin={15}
                    color="#c1b499"
                    fontSize={5}
                  />
                </div>
                <div className="w-full sm:w-1/2 mb-10">
                  <img
                    id="github-streak-stats"
                    src="https://github-readme-streak-stats.herokuapp.com?user=hrusikesh8280&theme=cobalt"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="w-full sm:w-1/2 mb-10">
                  <img
                    id="github-top-langs"
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=hrusikesh8280&theme=synthwave&show_icons=true&hide_border=true&layout=compact)"
                  />
                </div>
                <div className="w-full sm:w-1/2 mb-10">
                  <img
                    id="github-stats-card"
                    src="https://github-readme-stats.vercel.app/api?username=hrusikesh8280&theme=synthwave&show_icons=true&hide_border=true&count_private=true"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gitcalender;
