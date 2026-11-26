
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Toggle = () => {

  const [deleteStatus, setDeleteStatus] = useState(false);
  const [outlineStatus, setOutlineStatus] = useState(false);
  const [secondaryStatus, setSecondaryStatus] = useState(false);
  const [ghostStatus, setGhostStatus] = useState(false);

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold text-blue-700">
        Toggle Button Application
      </h2>

      {/* Delete Button */}
      <div className="flex items-center gap-4">
        <Button
          variant="destructive"
          onClick={() => setDeleteStatus(!deleteStatus)}
        >
          {deleteStatus ? "Delete ON" : "Delete OFF"}
        </Button>

        <span>
          Status: {deleteStatus ? "ON" : "OFF"}
        </span>
      </div>

      {/* Outline Button */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={() => setOutlineStatus(!outlineStatus)}
        >
          {outlineStatus ? "Outline ON" : "Outline OFF"}
        </Button>

        <span>
          Status: {outlineStatus ? "ON" : "OFF"}
        </span>
      </div>

      {/* Secondary Button */}
      <div className="flex items-center gap-4">
        <Button
          variant="secondary"
          onClick={() => setSecondaryStatus(!secondaryStatus)}
        >
          {secondaryStatus ? "Secondary ON" : "Secondary OFF"}
        </Button>

        <span>
          Status: {secondaryStatus ? "ON" : "OFF"}
        </span>
      </div>

      {/* Ghost Button */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          onClick={() => setGhostStatus(!ghostStatus)}
        >
          {ghostStatus ? "Ghost ON" : "Ghost OFF"}
        </Button>

        <span>
          Status: {ghostStatus ? "ON" : "OFF"}
        </span>
      </div>

    </div>
  );
};

export default Toggle;
