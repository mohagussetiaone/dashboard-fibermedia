import { IoDocuments } from 'react-icons/io5';
import { MdCancelScheduleSend } from 'react-icons/md';
import { MdMarkEmailRead } from 'react-icons/md';
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue';
import TotalSpent from 'views/admin/default/components/TotalSpent';
import PieChartCard from 'views/admin/default/components/PieChartCard';
import Widget from 'components/widget/Widget';
import CheckTable from 'views/admin/default/components/CheckTable';
import DailyTraffic from 'views/admin/default/components/DailyTraffic';
import tableDataCheck from './variables/tableDataCheck';

const Dashboard = ({ authToken }) => {
  return (
    <>
      {/* <div className="w-full"> */}
      {/* Card widget */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdMarkEmailRead className="h-7 w-7" />}
          title={'Tiket selesai'}
          subtitle={'16'}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={'Tiket diproses'}
          subtitle={'2'}
        />
        <Widget
          icon={<MdCancelScheduleSend className="h-7 w-7" />}
          title={'Tiket dibatalkan'}
          subtitle={'14'}
        />
      </div>
      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Tables & Charts */}
      <div className="mt-5">
        <CheckTable tableData={tableDataCheck} />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="col-span-1">
          <DailyTraffic />
        </div>
        <div className="col-span-1">
          <PieChartCard />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Dashboard;
