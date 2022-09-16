import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ButtonsBar } from "../components/ButtonsBar";
import '../css/index.css'

export const Home = () => {
  const enlace= "http://localhost:4000/api/";
  const [dibus, setDibus] = useState();

  // Function to collect data from API
  const getApiData = async () => {

    const response = await fetch (enlace)
      .then((response) => response.json());

    setDibus(response);
  };

  useEffect(() => { getApiData(); });

  return (
    <Flex className="container">
      <Flex className="barraBotones">
        <ButtonsBar /> 
      </Flex> 
      <Flex className="dibus">
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
    </Flex> 
  </Flex>
  )
}
