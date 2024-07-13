import React, { useEffect } from "react";
import CardDashboard from "../../components/dashboard/card-dashboard";
import BarChart from "../../components/dashboard/bar-chart";
import InfoMedia from "../../components/dashboard/info-media";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardAction } from "../../store/action/dashboard";
import { openNotifications } from "../../utils/notification";
import Loader from "./../../components/loader/index";

const Dashboard = () => {
  const { dashboardData } = useSelector((state) => state.dashboard);
  const { loading } = useSelector((state) => state.loadingData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardAction()).catch((err) => openNotifications(err.errorCode, err.message));
  }, []);

  return (
    // <Loader height="h-full" width="w-full" loading={loading}>
    <section className="space-y-8">
      <div className="bg-white rounded-md drop-shadow-md shadow-lg p-5">
        <p className="text-base font-medium">Selamat datang di aplikasi dashboard monitoring pembelajaran</p>
      </div>
      <div className="grid grid-cols-3 gap-x-8 items-center">
        <CardDashboard value={dashboardData?.totalDosen} title="Dosen" icon={<LiaChalkboardTeacherSolid className="text-[2.5rem] p-2 bg-red-500 text-white rounded-md" />} />
        <CardDashboard value={dashboardData?.totalMahasiswa} title="Mahasiswa" icon={<FaUsersBetweenLines className="text-[2.5rem] p-2 bg-red-500 text-white rounded-md" />} />
        <CardDashboard value={dashboardData?.totalAdmin} title="Admin" icon={<FaUserEdit className="text-[2.5rem] p-2 bg-red-500 text-white rounded-md" />} />
      </div>
      <div className="grid grid-cols-5 gap-x-8 items-center">
        <div className="col-span-3">
          <BarChart value={dashboardData?.fakultasMhs} />
        </div>
        <div className="col-span-2">
          <InfoMedia />
        </div>
      </div>
    </section>
    // </Loader>
  );
};

export default Dashboard;
