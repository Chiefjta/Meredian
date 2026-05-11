import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { KnowledgeSearch } from '@/components/right/KnowledgeSearch';
import { AgentChatPreview } from '@/components/right/AgentChatPreview';
import { AnalyticsSnapshot } from '@/components/right/AnalyticsSnapshot';
import { useUI } from '@/store/ui';

export function RightSidebar() {
  const tab = useUI((s) => s.rightTab);
  const setTab = useUI((s) => s.setRightTab);

  return (
    <aside
      className="glass flex h-full flex-col rounded-none border-y-0 border-r-0 p-3"
      aria-label="Side panel"
    >
      <Tabs
        value={tab}
        onValueChange={(v) => setTab(v as 'knowledge' | 'chat' | 'analytics')}
        className="flex h-full flex-col"
      >
        <TabsList>
          <TabsTrigger value="knowledge">Knowledge</TabsTrigger>
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="knowledge" className="flex-1 overflow-hidden">
          <KnowledgeSearch />
        </TabsContent>
        <TabsContent value="chat" className="flex-1 overflow-hidden">
          <AgentChatPreview />
        </TabsContent>
        <TabsContent value="analytics" className="flex-1 overflow-hidden">
          <AnalyticsSnapshot />
        </TabsContent>
      </Tabs>
    </aside>
  );
}
