import React from "react";

export default function About() {
  return (
    <div>
      <h1 className="display-4">About Contact Manager</h1>
      <p className="lead">
        This is a simple app to manage dummy contacts. It is a full CRUD
        application, created by Mike Troianello in{" "}
        <span className="text-danger">React</span>.
      </p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
}
