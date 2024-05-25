'use client'
import {
  CardDashboard,
  DonutChartHero,
  BarChartHero,
  BarChart,
  DataTable,
  CardCandidates,
  CardPostJob,
  CardJobActive,
} from "@/components";
import { useEffect, useState } from "react";
export default function Page() {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data asynchronously here
      // const candidatesData = await fetchCandidatesData();
      // const jobData = await fetchJobData();
      
      setDataLoaded(true);
    };

    fetchData();
  }, []);



  return dataLoaded ?(
    <main>
      <h1 className={`mb-4 text-xl`}>Dashboard</h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
          <CardCandidates />
          <CardPostJob />
          <CardJobActive />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <BarChart />
          <DataTable />
        </div>
      </div>
    </main>
 ) : null;
}
