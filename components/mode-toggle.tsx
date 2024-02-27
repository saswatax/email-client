"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Label
      htmlFor="mute"
      className="m-4 flex items-center gap-4 text-xs font-normal"
    >
      <Switch
        id="mute"
        aria-label="Mute thread"
        defaultChecked={true}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      Dark Mode
    </Label>
  );
}
