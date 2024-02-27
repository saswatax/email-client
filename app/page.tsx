"use client";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import AccountSwitcher from "./components/account-switcher";
import NavBar from "./components/nav-bar";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <main id="app">
      {/* <ModeToggle /> */}
      <ResizablePanelGroup
        style={{
          height: "100vh",
        }}
        direction="horizontal"
        className="w-screen rounded-lg border"
      >
        <ResizablePanel
          defaultSize={20}
          collapsedSize={4}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => setIsCollapsed(true)}
          onExpand={() => setIsCollapsed(false)}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out",
          )}
        >
          <AccountSwitcher isCollapsed={isCollapsed} />
          <Separator />
          <NavBar isCollapsed={isCollapsed} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
