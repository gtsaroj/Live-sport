import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Activity,
  Calendar,
  ClubIcon as Football,
  PlayCircle,
  Trophy,
  Users,
  Video,
} from "lucide-react";
import { DashboardStats } from "@/components/dashboard-stats";
import { RecentMatches } from "@/components/recent-matches";

export default function DashboardPage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your sports content management
        </p>
      </div>
      <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardStats
          title="Total Live Matches"
          value="12"
          description="+2 from yesterday"
          icon={<PlayCircle className="h-5 w-5 text-rose-500" />}
        />
        <DashboardStats
          title="Upcoming Matches"
          value="24"
          description="+5 from last week"
          icon={<Calendar className="h-5 w-5 text-blue-500" />}
        />
        <DashboardStats
          title="Highlights"
          value="48"
          description="+12 from last month"
          icon={<Video className="h-5 w-5 text-amber-500" />}
        />
        <DashboardStats
          title="Total Views"
          value="12.5K"
          description="+24% from last month"
          icon={<Users className="h-5 w-5 text-green-500" />}
        />
      </div>
      <Tabs defaultValue="all">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All Sports</TabsTrigger>
            <TabsTrigger value="football">
              <Football className="mr-2 h-4 w-4" />
              Football
            </TabsTrigger>
            <TabsTrigger value="cricket">
              <Trophy className="mr-2 h-4 w-4" />
              Cricket
            </TabsTrigger>
            <TabsTrigger value="basketball">
              <Activity className="mr-2 h-4 w-4" />
              Basketball
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentMatches />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="football" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Football Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentMatches sportType="football" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="cricket" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cricket Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentMatches sportType={"cricket"} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="basketball" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basketball Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentMatches sportType="basketball" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
