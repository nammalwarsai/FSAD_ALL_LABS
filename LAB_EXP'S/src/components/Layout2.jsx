import React from "react";

const Layout2 = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto auto 1fr",
        gridTemplateColumns: "1fr 2fr 1fr",
        gridTemplateAreas: `
          "header header header"
          "search search search"
          "left-sidebar middle right-sidebar"
        `,
        height: "100vh",
        margin: "0",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          gridArea: "header",
          backgroundColor: "#f5deb3", // Beige
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          padding: "20px",
        }}
      >
        HEADER
      </div>
      <div
        style={{
          gridArea: "search",
          backgroundColor: "#00ffff", // Aqua
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
          padding: "20px",
        }}
      >
        SEARCH
      </div>
      <div
        style={{
          gridArea: "left-sidebar",
          backgroundColor: "#0000ff", // Blue
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
          color: "white",
          padding: "20px",
        }}
      >
        LEFT SIDE BAR
      </div>
      <div
        style={{
          gridArea: "middle",
          backgroundColor: "#ffff00", // Yellow
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
          color: "black",
          padding: "20px",
        }}
      >
        MIDDLE
      </div>
      <div
        style={{
          gridArea: "right-sidebar",
          backgroundColor: "#00ff00", // Green
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
          padding: "20px",
        }}
      >
        RIGHT SIDE BAR
      </div>
    </div>
  );
};

export default Layout2;
