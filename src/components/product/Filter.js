import React from "react";

export default function Filter({  pdl, filteringName }) {
  return (
    <div>
      {/* filtering by name */}
      <div className="select_filter">
        <select value={pdl} onChange={filteringName}>
          <option>All</option>
          <option value="P">Pending</option>
          <option value="A">Approved</option>
        </select>
      </div>     
    </div>
  );
}
