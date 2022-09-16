//  https://contactmentor.com/fetch-in-reactjs-example/
import React, { useEffect, useState } from "react";
import '../css/index.css'

export const Page = (props) => {

  const name= props.name;
  const enlace= "http://localhost:4000/api/" + name;
  const [dibus, setDibus] = useState();

  // Function to collect data from API
  const getApiData = async () => {

    const response = await fetch (enlace)
      .then((response) => response.json());

    setDibus(response);
  };

  useEffect(() => { getApiData(); });

  return (
        <div className="dibus">
          {dibus && dibus.map((video) => (
            <div>

              <iframe
              width="560"
              height="315"
              src={video.href}
              title="Youtube Player"
              frameborder="0"
              allowFullScreen
              />
            </div>
          ))}
        </div>
  )
}
