import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { type Mail } from "../data";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge, type BadgeProps } from "@/components/ui/badge";

interface Props {
  mails: Array<Mail>;
}

export default function MailList({ mails }: Props) {
  const [selectedMail, setSelectedMail] = useState<string>(mails[0]?.id);

  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {mails.map((mail) => (
          <button
            key={mail.id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              selectedMail === mail.id && "bg-muted",
            )}
            onClick={() => setSelectedMail(mail.id)}
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{mail.name}</div>
                  {!mail.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs",
                    selectedMail === mail.id
                      ? "text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {formatDistanceToNow(new Date(mail.date), {
                    addSuffix: true,
                  })}
                </div>
              </div>
              <div className="text-xs font-medium">{mail.subject}</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {mail.text.substring(0, 300)}
            </div>
            {mail.labels.length ? (
              <div className="flex items-center gap-2">
                {mail.labels.map((label) => (
                  <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                    {label}
                  </Badge>
                ))}
              </div>
            ) : null}
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}

function getBadgeVariantFromLabel(label: string): BadgeProps["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "default";
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline";
  }

  return "secondary";
}
