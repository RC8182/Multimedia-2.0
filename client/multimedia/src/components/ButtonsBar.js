import { Button, Stack } from "@chakra-ui/react";

import React from 'react'
import { Link } from "react-router-dom";
import { Page } from "../pages/Page";

export const ButtonsBar = () => {



  return (
    <Stack direction='row' spacing={4} align='center'>

<Link to={'/leo'}>
  <Button colorScheme='teal' variant='outline'>
    Leo
  </Button>
</Link>
<Link to={'/vlad'}>
  <Button colorScheme='teal' variant='outline'>
    Vlad
  </Button>
  </Link>

  <Button colorScheme='teal' variant='outline'>
    Fabri
  </Button>
  <Button colorScheme='teal' variant='outline'>
    Bebes 
  </Button>
</Stack>
  )
}


