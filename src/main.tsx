import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { router } from "./router.tsx";
import { RouterProvider } from "react-router-dom";

const colors = {
  primary: {
    500: "#782DF3",
  },
  gold: "#FFC107",
};

const fonts = {
  heading: `'Rubik Variable', sans-serif`,
  body: `'Rubik Variable', sans-serif`,
};

const theme = extendTheme({ colors, fonts });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
