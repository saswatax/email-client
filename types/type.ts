import { type LucideIcon } from "lucide-react";
import { ButtonProps } from "@/components/ui/button";

export interface Nav {
  title: string;
  label: string;
  icon: LucideIcon;
  variant: ButtonProps["variant"];
}
