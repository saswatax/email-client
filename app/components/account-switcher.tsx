import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { accounts, type Account } from "../data";

interface Props {
  isCollapsed: boolean;
}

export default function AccountSwitcher({ isCollapsed }: Props) {
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(
    accounts[0],
  );

  function handleAccountSelect(email: string) {
    const selectedAccount = accounts.find((account) => account.email === email);
    setSelectedAccount(selectedAccount ?? null);
  }

  return (
    <section
      className={cn(
        "flex h-[52px] items-center justify-center",
        isCollapsed ? "h-[52px]" : "px-2",
      )}
    >
      <Select
        defaultValue={selectedAccount?.email}
        onValueChange={handleAccountSelect}
      >
        <SelectTrigger
          className={cn(
            "flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
            isCollapsed &&
              "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden",
          )}
        >
          <SelectValue placeholder="Select an account">
            {selectedAccount?.icon}
            <span className={cn("ml-2", isCollapsed && "hidden")}>
              {selectedAccount?.label}
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {accounts.map((account) => (
            <SelectItem key={account.email} value={account.email}>
              <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                {account.icon}
                {account.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </section>
  );
}
