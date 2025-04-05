import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4 rounded-xl shadow-md bg-white dark:bg-zinc-900", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-6",
        month: "space-y-4 flex-1",
        caption: "flex justify-between items-center px-2 pt-2",
        caption_label: "text-lg font-semibold text-gray-800 dark:text-white",
        nav: "flex gap-2 items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-8 w-8 p-0 opacity-70 hover:opacity-100 border-none"
        ),
        nav_button_previous: "",
        nav_button_next: "",
        table: "w-full border-separate border-spacing-y-2",
        head_row: "flex",
        head_cell:
          "text-muted-foreground w-10 h-10 text-center text-xs font-medium",
        row: "flex w-full",
        cell:
          "w-10 h-10 text-center text-sm relative rounded-full transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-10 h-10 p-0 font-medium text-sm rounded-full aria-selected:opacity-100"
        ),
        day_range_end: "bg-accent text-white",
        day_selected:
          "bg-primary text-primary-foreground font-semibold hover:bg-primary/90",
        day_today: "bg-blue-100 text-blue-900 dark:bg-blue-800 dark:text-white",
        day_outside:
          "opacity-50 text-muted-foreground",
        day_disabled: "text-gray-400 opacity-50 cursor-not-allowed",
        day_range_middle: "bg-accent/60 text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };