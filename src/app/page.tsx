const Homepage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      <div className="bg-background-foreground p-4 rounded-lg border-2 lg:col-span-3">Test</div>
      <div className="bg-background-foreground p-4 rounded-lg border-2">Test</div>
      <div className="bg-background-foreground p-4 rounded-lg border-2">Test</div>
      <div className="bg-background-foreground p-4 rounded-lg border-2">Test</div>
      <div className="bg-background-foreground p-4 rounded-lg border-2 lg:col-span-3">Test</div>
      <div className="bg-background-foreground p-4 rounded-lg border-2">Test</div> 
    </div>
  );
}
export default Homepage;