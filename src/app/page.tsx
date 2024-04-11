"use client";
import { Sandpack } from "@codesandbox/sandpack-react";

const App = () => {
  const files = {
    "App.tsx": `import React from "react";
import * as ReactDOM from "react-dom/client";
import { ChakraProvider, Button} from "@chakra-ui/react";

const HelloWorld = () => {
  return (
    <Button>Hi</Button>)
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);`,
  };

  return (
    <Sandpack
      files={files}
      template="react-ts"
      options={{ editorHeight: "400px" }}
      customSetup={{
        dependencies: {
          "@chakra-ui/react": "latest",
          "@chakra-ui/icons": "latest",
          "@emotion/react": "latest",
          "@emotion/styled": "latest",
          "framer-motion": "latest",
          react: "latest",
          "react-dom": "latest",
          "react-scripts": "latest",
        },
        devDependencies: {
          "@types/react": "latest",
          "@types/react-dom": "latest",
          typescript: "latest",
        },
      }}
    />
  );
};

export default App;
