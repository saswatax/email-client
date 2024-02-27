import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import type { Nav } from "@/types/type";

interface Props {
  navList: Array<Nav>;
  isCollapsed: boolean;
}

export default function NavSegment({ navList, isCollapsed }: Props) {
  return (
    <section className="m-2 flex flex-col gap-1">
      <TooltipProvider delayDuration={0}>
        {navList.map((nav, index) =>
          isCollapsed ? (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: nav.variant, size: "icon" }),
                    "h-9 w-9",
                    nav.variant === "default" &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
                  )}
                >
                  <nav.icon className="h-4 w-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {nav.title}
                {nav.label && (
                  <span className="ml-auto text-muted-foreground">
                    {nav.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              className={cn(
                buttonVariants({ variant: nav.variant, size: "sm" }),
                nav.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start",
              )}
              href="#"
            >
              <nav.icon className="mr-2 h-4 w-4" />
              {nav.title}
              {nav.label && (
                <span
                  className={cn(
                    "ml-auto",
                    nav.variant === "default" &&
                      "text-background dark:text-white",
                  )}
                >
                  {nav.label}
                </span>
              )}
            </Link>
          ),
        )}
      </TooltipProvider>
    </section>
  );
}
