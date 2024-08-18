import { HistoryData } from "../components/history";
import { Layout } from "../components/layout";
import { StudentStats } from "../components/metrics/Students";
import { MetricSummary } from "../components/metrics/Summary";

const Dashboard = () => {
  return (
    <Layout>
      <MetricSummary />
      <StudentStats />
      <HistoryData />
    </Layout>
  );
};

export default Dashboard;
