"use client"
import { Text } from "@mantine/core";
import dayjs from "dayjs";
import { MantineReactTable, MRT_ColumnDef, useMantineReactTable } from "mantine-react-table";
import templateData from '@/dummy_data/gettemplatedata.json'
import { getBaseTableConfig } from "@/config/getBaseTableConfig";

type TemplateItem = {
  id: string;
  response_text: string;
  source_id: string;
  candidate_model_id: string;
  input_id: string;
  user_inference_monitoring_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
};

const columns: MRT_ColumnDef<TemplateItem>[] = [
  {
    accessorKey: "id",
    header: "ID",
    size: 213,
  },
  {
    accessorKey: "response_text",
    header: "Response Text",
    size: 222,
  },

  {
    accessorKey: "source_id",
    header: "Source ID",
    size: 188,
  },

  {
    accessorKey: "candidate_model_id",
    header: "Candidate Model ID",
    size: 177,
  },

  {
    accessorKey: "input_id",
    header: "Input ID",
    size: 177,
  },

  {
    accessorKey: "user_inference_monitoring_id",
    header: "Monitoring ID",
    size: 177,
  },
];

export default function Home() {

  const tableConfig = getBaseTableConfig<TemplateItem>();

  const table = useMantineReactTable<TemplateItem>({
    columns: columns,
    data: templateData,
    ...tableConfig
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <MantineReactTable table={table} />
    </main>
  );
}