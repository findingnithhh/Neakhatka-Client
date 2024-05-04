'use client'
import {
  CardDashboard,
  DonutChartHero,
  BarChartHero,
  BarChart,
  DataTable,
} from "@/components";

export default async function Page() {
  return (
    <main>
      <h1 className={`mb-4 text-xl`}>Dashboard</h1>
      <div>
        <div className="grid grid-cols-3 gap-10 my-10">
          <CardDashboard />
          <CardDashboard />
          <CardDashboard />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <BarChart />
          <DataTable />
        </div>
      </div>
    </main>
  );
}
