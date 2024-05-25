import React from "react";
import CardDashboard from "../../components/dashboard/card-dashboard";
import BarChart from "../../components/dashboard/bar-chart";
import InfoMedia from "../../components/dashboard/info-media";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";

const Dashboard = () => {
  return (
    <section className="space-y-8">
      <div className="bg-white rounded-md drop-shadow-md shadow-lg p-5">
        <p className="text-base font-medium">Selamat datang di aplikasi dashboard monitoring pembelajaran</p>
      </div>
      <div className="grid grid-cols-3 gap-x-8 items-center">
        <CardDashboard title="Dosen" total={200} icon={<LiaChalkboardTeacherSolid className="text-[2.5rem] p-2 bg-red-500 text-white rounded-md" />} />
        <CardDashboard title="Mahasiswa" total={200} icon={<FaUsersBetweenLines className="text-[2.5rem] p-2 bg-red-500 text-white rounded-md" />} />
        <CardDashboard title="Admin" total={200} icon={<FaUserEdit className="text-[2.5rem] p-2 bg-red-500 text-white rounded-md" />} />
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
