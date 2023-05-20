import { isMobile, browserName } from "react-device-detect";

export const Download = () => {
  function PrintPage() {
    if (browserName == "Chrome") {
      window.print();
      return true;
    }
    alert("Téléchargement est Disponible seulement sur  Navigateur  Chrome.");
    return false;
  }
  if (!isMobile) {
    return (
      <div className="flex w-full items-center justify-end print:hidden">
        <button
          className="btn-ghost flex items-center gap-2 p-1"
          onClick={() => PrintPage()}
        >
          Télécharger
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </button>
      </div>
    );
  }
  return <></>;
};
