import AverageSalesComponent from "@/components/cards/averageSales";
import { Divider, Space, Typography } from "antd";
import { BlockMath } from "react-katex";

const { Title } = Typography;

interface AverageSalesProps {
  data?: BrandsResponse;
}

export default function AverageSales({ data }: AverageSalesProps) {
  return (
    <div className="flex flex-col my-4 relative">
      <Divider />
      <Title level={4} className="m-0">
        Average Sales
      </Title>

      <div className="flex flex-wrap gap-2">
        {data?.brands?.map((brand) => (
          <div key={brand.name}>
            <Title level={5} className="m-0">
              {brand.name}
            </Title>
            <Space>
              {brand.categories.map((cat, index) => (
                <AverageSalesComponent category={cat} key={index} />
              ))}
            </Space>
          </div>
        ))}
      </div>

      <div className="w-min h-min pt-2 pb-4">
        <BlockMath
          math={`\\frac{\\text{Total Sales}}{\\text{Weeks with Data}}=\\text{Average Sales}`}
        />
      </div>
    </div>
  );
}
