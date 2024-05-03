import React from "react";

const CardContainer = ({ children }) => {
  return (
    <section className="p-[1.5rem] space-y-7 h-[88vh] w-full bg-white rounded-md drop-shadow-md shadow-lg overflow-auto">
      {children}
    </section>
  );
};

export default CardContainer;
