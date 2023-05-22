import React, { useEffect, useState } from "react";

const PWAInstallationButton = () => {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("PWA installation accepted");
        } else {
          console.log("PWA installation dismissed");
        }
        setInstallPrompt(null);
      });
    }
  };

  return (
    <button onClick={handleInstallClick} >
      Install App
    </button>
  );
};

export default PWAInstallationButton;
