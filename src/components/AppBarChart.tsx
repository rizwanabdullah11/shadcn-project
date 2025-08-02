'use client';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]
const AppBarChart = () => {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Revenue Analytics</h2>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--chart-1)]" />
              <span>Desktop</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--chart-4)]" />
              <span>Mobile</span>
            </div>
          </div>
        </div>
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }}
                />
                <YAxis
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  cursor={{ fill: 'var(--muted)', fillOpacity: 0.1 }}
                />
                <Bar 
                  dataKey="desktop" 
                  fill="var(--color-desktop)" 
                  radius={[4, 4, 0, 0]}
                  maxBarSize={50}
                />
                <Bar 
                  dataKey="mobile" 
                  fill="var(--color-mobile)" 
                  radius={[4, 4, 0, 0]}
                  maxBarSize={50}
                />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
    </div>
  )
}

export default AppBarChart