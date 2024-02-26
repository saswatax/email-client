import Link from "next/link";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function MavBar() {
  return (
    <div>
      {navTop.map((nav, index) => (
        <Link
          className={cn(buttonVariants({ variant: nav.variant }))}
          key={index}
          href="#"
        >
          <nav.icon />
          {nav.title}
          {nav.label}
        </Link>
      ))}
      <Separator />
      {navBottom.map((nav, index) => (
        <Link key={index} href="#">
          <nav.icon />
          {nav.title}
          {nav.label}
        </Link>
      ))}
    </div>
  );
}

const navTop = [
  {
    title: "Inbox",
    label: "128",
    icon: Inbox,
    variant: "default",
  },
  {
    title: "Drafts",
    label: "9",
    icon: File,
    variant: "ghost",
  },
  {
    title: "Sent",
    label: "",
    icon: Send,
    variant: "ghost",
  },
  {
    title: "Junk",
    label: "23",
    icon: ArchiveX,
    variant: "ghost",
  },
  {
    title: "Trash",
    label: "",
    icon: Trash2,
    variant: "ghost",
  },
  {
    title: "Archive",
    label: "",
    icon: Archive,
    variant: "ghost",
  },
];

const navBottom = [
  {
    title: "Social",
    label: "972",
    icon: Users2,
    variant: "ghost",
  },
  {
    title: "Updates",
    label: "342",
    icon: AlertCircle,
    variant: "ghost",
  },
  {
    title: "Forums",
    label: "128",
    icon: MessagesSquare,
    variant: "ghost",
  },
  {
    title: "Shopping",
    label: "8",
    icon: ShoppingCart,
    variant: "ghost",
  },
  {
    title: "Promotions",
    label: "21",
    icon: Archive,
    variant: "ghost",
  },
];
