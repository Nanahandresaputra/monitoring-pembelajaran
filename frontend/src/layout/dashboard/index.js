import React from "react";
import CardDashboard from "../../components/dashboard/card-dashboard";

const Dashboard = () => {
  return (
    <section>
      <div className="flex space-x-7 items-center">
        <CardDashboard />
        <CardDashboard />
        <CardDashboard />
      </div>
    </section>
  );
};

export default Dashboard;
