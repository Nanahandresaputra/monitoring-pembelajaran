import React from "react";
import CardDashboard from "../../components/dashboard/card-dashboard";
import BarChart from "../../components/dashboard/bar-chart";
import InfoMedia from "../../components/dashboard/info-media";

const Dashboard = () => {
  return (
    <section className="space-y-8">
      <div className="bg-white rounded-md drop-shadow-md shadow-lg p-5">
        <p className="text-base font-medium">
          Selamat datang di aplikasi dashboard monitoring Lorem ipsum
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-8 items-center">
        <CardDashboard />
        <CardDashboard />
        <CardDashboard />
      </div>
      <div className="grid grid-cols-5 gap-x-8 items-center">
        <div className="col-span-3">
          <BarChart />
        </div>
        <div className="col-span-2">
          <InfoMedia />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
