"use client";

import { FilterBar } from "@/components/sticky-title-list/_utils/filter.bar";
import React from "react";

const ClientSuccessFilter = () => {
  return (
    <div>
      <div className=" container-md bg-background">
        {/* <FilterBar onFilterChange={(filters) => { */}
        <FilterBar onFilterChange={() => {}} />
      </div>
    </div>
  );
};

export default ClientSuccessFilter;
