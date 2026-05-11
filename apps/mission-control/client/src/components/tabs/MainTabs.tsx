import { Activity, FolderKanban, GitBranch } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LiveFeed } from './LiveFeed';
import { ActiveProjects } from './ActiveProjects';
import { ServicePipeline } from './ServicePipeline';

export function MainTabs() {
  return (
    <Tabs defaultValue="feed" className="flex h-full flex-col">
      <TabsList>
        <TabsTrigger value="feed">
          <Activity className="h-3.5 w-3.5" aria-hidden /> Live Feed
        </TabsTrigger>
        <TabsTrigger value="projects">
          <FolderKanban className="h-3.5 w-3.5" aria-hidden /> Active Projects
        </TabsTrigger>
        <TabsTrigger value="pipeline">
          <GitBranch className="h-3.5 w-3.5" aria-hidden /> Service Pipeline
        </TabsTrigger>
      </TabsList>

      <TabsContent value="feed">
        <LiveFeed />
      </TabsContent>
      <TabsContent value="projects">
        <ActiveProjects />
      </TabsContent>
      <TabsContent value="pipeline">
        <ServicePipeline />
      </TabsContent>
    </Tabs>
  );
}
