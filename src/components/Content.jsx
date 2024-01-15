import React from "react";
import Categogy from "./content/Categories";
import Videos from "./content/Videos";

export default function Content({ data }) {
  return (
    <div className="flex-col w-full pl-6">
      <Categogy />
      <div className="flex pt-5">
        <Videos/>
      </div>
    </div>
  );
}
