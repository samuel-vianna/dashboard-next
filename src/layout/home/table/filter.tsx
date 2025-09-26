import { notification, Select, Typography } from "antd";
import { DateRangeType } from ".";

interface DateFilterProps {
  data?: BrandsResponse;
  dateRange: { start: number; end: number };
  setDateRange: React.Dispatch<React.SetStateAction<DateRangeType>>;
}

export default function DateFilter({
  data,
  dateRange,
  setDateRange,
}: DateFilterProps) {
  const [api, contextHolder] = notification.useNotification();

  const dateRangeOptions = data?.dateRange?.map((d) => ({
    label: d,
    value: Number(d.split(" ")[1]) - 1,
  }));

  const handleUpdate = (type: string, value: number) => {
    try {
      // verify if first value is always lower than second
      if (type === "start" && value > (dateRange.end || 0)) {
        throw new Error("Start date must be lower than end date");
      }

      if (type === "end" && value < (dateRange.start || 0)) {
        throw new Error("End date must be greater than start date");
      }

      setDateRange((prev) => ({
        ...prev,
        [type]: value,
      }));
    } catch (error) {
      console.log(error);
      api.warning({
        message: `Failed to update filter`,
        description: "The date range is invalid",
      });
    }
  };

  return (
    <div className="mb-4 flex items-end gap-2">
      {contextHolder}
      <div>
        <Typography>Start Week</Typography>
        <Select
          options={dateRangeOptions}
          className="w-[200px]"
          value={dateRange.start}
          onChange={(value) => handleUpdate("start", value)}
        />
      </div>
      <div>
        <Typography>End Week</Typography>
        <Select
          options={dateRangeOptions}
          className="w-[200px]"
          value={dateRange.end}
          onChange={(value) => handleUpdate("end", value)}
        />
      </div>
      <Typography>
        Use table filters to filter brands and categories.
      </Typography>
    </div>
  );
}
