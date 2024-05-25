import { BarChart } from "@tremor/react";

const chartdata = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
  {
    name: "Ferns",
    "Number of threatened species": 281,
  },
  {
    name: "Arachnids",
    "Number of threatened species": 251,
  },
  {
    name: "Corals",
    "Number of threatened species": 232,
  },
  {
    name: "Algae",
    "Number of threatened species": 98,
  },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();

const BarChartHero = () => (
  <BarChart
    data={chartdata}
    index="name"
    categories={["Number of threatened species"]}
    colors={["blue"]}
    className="text-blue-500"
    valueFormatter={dataFormatter}
    yAxisWidth={48}
    onValueChange={(v) => console.log(v)}
  />
);
export { BarChartHero };