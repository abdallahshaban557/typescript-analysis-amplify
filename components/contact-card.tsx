import React from "react";

const ContactCardComponent = ({ name, email, image }) => {
  const handleSendEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        border: "2px solid blue",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          marginRight: "1rem",
          borderRadius: "50%",
          width: "64px",
          height: "64px",
        }}
      />
      <div style={{ width: "70%" }}>
        <h2 style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>{name}</h2>
        <h3
          style={{
            marginTop: "0",
            color: "gray",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          {email}
        </h3>
        <button
          style={{
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
          }}
          onClick={handleSendEmail}
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default ContactCardComponent;
