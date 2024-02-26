import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { accounts, type Account } from "../data";

export default function AccountSwitcher() {
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);

  function handleAccountSelect(email: string) {
    const selectedAccount = accounts.find((account) => account.email === email);
    setSelectedAccount(selectedAccount ?? null);
  }

  return (
    <Select defaultValue={"asta"} onValueChange={handleAccountSelect}>
      <SelectTrigger>
        <SelectValue placeholder="Select account">
          {selectedAccount?.label}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {accounts.map((account) => (
          <SelectItem key={account.email} value={account.email}>
            {account.icon}
            {account.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
