import { Phone, MessageSquare } from "lucide-react";
import { BUSINESS } from "@/lib/site";

/** Mobile-only fixed bottom bar: click-to-call + jump to the lead form.
 *  Keeps the primary conversion (a phone call) one tap away on every page. */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-border/60 bg-background/95 p-3 backdrop-blur-md md:hidden">
      <a
        href={BUSINESS.phonePrimaryTel}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
      >
        <Phone className="h-4 w-4" />
        Call {BUSINESS.phonePrimaryDisplay}
      </a>
      <a
        href="#inquire"
        className="flex items-center justify-center gap-2 rounded-full border border-primary/30 px-4 py-3 text-sm font-medium text-primary"
      >
        <MessageSquare className="h-4 w-4" />
        Quote
      </a>
    </div>
  );
}
