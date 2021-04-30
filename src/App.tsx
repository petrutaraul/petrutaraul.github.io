import React, { useEffect, useState } from 'react';
import axios from "axios";
import RDesktop from './components/r-desktop/r-desktop'

import "./style/general.scss";
import "./style/reset.scss";
import "./style/mediaquery.scss";

import './App.css';
import { IApiData } from './interfaces/interfaces';

function App() {
  const [apiData, setData] = useState<IApiData | undefined>(undefined);

  const getData = () => {
    axios.get("https://api.npoint.io/088987bfa1f605d108a5").then((response) => {
      const data = response.data;
      if (data) {
        setData(data);
      }
    }).catch((error) => console.log(error));
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <RDesktop projects={apiData?.projects!} socials={apiData?.socials!} header={apiData?.header!} />
    </div>
  );
}

export default App;
