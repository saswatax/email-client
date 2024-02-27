"use client";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Input } from "@/components/ui/input";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import AccountSwitcher from "./components/account-switcher";
import NavBar from "./components/nav-bar";
import MailList from "./components/mail-list";
import MailViewer from "./components/mail-viewer";
import { mails } from "./data";
import { Search } from "lucide-react";

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
        <ResizablePanel minSize={30} defaultSize={40}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Inbox</h1>
              <TabsList className="ml-auto">
                <TabsTrigger
                  value="all"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  All mail
                </TabsTrigger>
                <TabsTrigger
                  value="unread"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Unread
                </TabsTrigger>
              </TabsList>
            </div>
            <Separator />
            <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
              </form>
            </div>
            <TabsContent value="all">
              <MailList mails={mails} />
            </TabsContent>
            <TabsContent value="unread">
              <MailList mails={mails.filter((mail) => !mail.read)} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={20} defaultSize={40}>
          <MailViewer mail={mails[0]} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
