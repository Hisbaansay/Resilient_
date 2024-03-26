import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

function init() {
  const app = document.createElement("div");
  app.id = "root";

  function appendFactCheckButton() {
    setTimeout(() => {
      const parentDiv = document.querySelector(
        ".css-175oi2r.r-k4xj1c.r-18u37iz.r-1wtj0ep"
        
      );
      const parentChild = parentDiv?.children[1] as HTMLDivElement;
      parentChild.style.alignSelf = "flex-end";

      const tweet = document.querySelector(
        '[data-testid="tweetText"]'
      ) as HTMLDivElement;

      parentDiv?.insertBefore(app, parentChild);

      const container  = document.getElementById("root") as HTMLElement;
      const root = createRoot(container);
      
      root.render(
        // <ChakraProvider>
          <React.StrictMode>
            <App tweetText={tweet.innerText} />
          </React.StrictMode>
        // </ChakraProvider>
      );
    }, 2000);
  }

  appendFactCheckButton();

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length > 0 && 
        mutation.addedNodes.length < 2) {
        appendFactCheckButton();
      }
    });
  });

  observer.observe(app, {
    subtree: false,
    childList: true,
  });
}

init();
