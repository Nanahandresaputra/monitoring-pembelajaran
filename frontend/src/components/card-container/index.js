import React from "react";

const CardContainer = ({ childern }) => {
  return (
    <section className="p-[1.5rem] h-[90vh] w-full bg-white rounded-md">
      {childern}
    </section>
  );
};

export default CardContainer;
