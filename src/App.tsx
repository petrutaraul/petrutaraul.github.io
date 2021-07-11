import { useEffect, useState } from "react";
import axios from "axios";

import "./style/general.scss";
import "./style/reset.scss";
import "./style/mediaquery.scss";

import "./App.css";
import { IApiData } from "./interfaces/interfaces";
import RHeader from "./components/r-header/r-header";
import RAbout from "./components/r-about/r-about";
import RProjects from "./components/r-projects/r-projects";
import RSkills from "./components/r-skills/r-skills";

function App() {
  const [apiData, setData] = useState<IApiData | undefined>(undefined);

  const getData = () => {
    axios.get("https://api.npoint.io/088987bfa1f605d108a5").then((response) => {
      const data = response.data;
      if (data) {
        setData(data);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App bg-gradient-to-r from-red-900 to-purple-900 w-full h-full pt-10 justify-center content-center flex">
      <div className="contet w-11/12 text-white">
        <RHeader
          name={apiData?.header.name!}
          contact={apiData?.header.contact!}
          job={apiData?.header.job!}
          resume={apiData?.header.resume!}
          socials={apiData?.socials!}
          emailIcon={apiData?.header.emailIcon!}
        />
        <RAbout description={apiData?.about.description!} />
        <RProjects projects={apiData?.projects!} />
        <RSkills skills={apiData?.skills!} />
      </div>
    </div>
  );
}

export default App;
