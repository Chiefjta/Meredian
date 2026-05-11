import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';
import { Header } from './Header';
import { LeftSidebar } from './LeftSidebar';
import { RightSidebar } from './RightSidebar';
import { BottomQueue } from './BottomQueue';
import { MainTabs } from '@/components/tabs/MainTabs';

export function Shell() {
  return (
    <div className="flex h-screen min-h-0 flex-col">
      <Header />
      <div className="flex min-h-0 flex-1">
        <LeftSidebar />
        <PanelGroup direction="horizontal" className="flex-1">
          <Panel defaultSize={70} minSize={45}>
            <main
              className="flex h-full min-h-0 flex-col p-3 overflow-hidden"
              aria-label="Mission Control main panel"
            >
              <MainTabs />
            </main>
          </Panel>
          <PanelResizeHandle
            className="group flex w-1.5 items-center justify-center bg-transparent hover:bg-accent-cyan/20 focus-visible:bg-accent-cyan/30"
            aria-label="Resize side panel"
          >
            <div className="h-10 w-0.5 rounded-full bg-border-subtle group-hover:bg-accent-cyan" />
          </PanelResizeHandle>
          <Panel defaultSize={30} minSize={20} maxSize={45}>
            <RightSidebar />
          </Panel>
        </PanelGroup>
      </div>
      <BottomQueue />
    </div>
  );
}
