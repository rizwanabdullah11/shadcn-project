import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
// import PopularContent from "@/components/PopularContent";

// import AppPieInteractiveChart from "@/components/AppPieInteractiveChart";
const Homepage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      <div className="bg-background-foreground p-4 rounded-lg border-2">
        <AppBarChart />
      </div>
 
      <div className="bg-background-foreground p-4 rounded-lg border-2  ">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-background-foreground p-4 rounded-lg border-2">
        <AppPieChart
       />
      </div>
      <div className="bg-background-foreground p-4 rounded-lg border-2">Test</div>
      <div className="bg-background-foreground p-4 rounded-lg border-2">
        <AppAreaChart />
      </div>
      <div className="bg-background-foreground p-4 rounded-lg border-2">
        <CardList title="Popular Content" />
      </div>
    </div>
  );
}
export default Homepage;