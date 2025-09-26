import TabWrapper from "@/components/ui/tabWrapper";
import { Typography } from "antd";

const { Paragraph, Title } = Typography;

export default function AboutLayout() {
  return (
    <TabWrapper>
      <Title level={4}>About this Project</Title>

      <section>
        <Title level={5}>Handling null / invalid data</Title>
        <Paragraph>
          We replace null values with zero, as they represent weeks with no
          sales. These weeks are still included in the calculations to ensure
          that averages and totals are not distorted by missing data.
        </Paragraph>
      </section>

      <section>
        <Title level={5}>Chart & Table design thoughts</Title>
        <Paragraph>
          Charts should prioritize clarity and effective comparison. In this
          dashboard, we start with an overview section showing total sales and
          average sales per week. This is followed by a bar chart comparing
          brands over time and a pie chart illustrating total sales by brand to
          highlight which brand performed best. A dedicated section presents
          brand-specific charts, allowing users to select a brand and view
          detailed trends either as “Week-over-Week” or “Cumulative Total.”
          Finally, a summary table displays the average sales per category,
          grouped by brand, enabling quick comparison of category performance.
          Charts include consistent color coding, legends, hover tooltips, and
          clear handling of missing data.
        </Paragraph>
      </section>

      <section>
        <Title level={5}>How AI / MCP could extend this project</Title>
        <Paragraph>
          An AI or MCP layer could significantly enhance the project by
          providing data-driven insights, conducting market research, and
          generating competitor comparisons. In this example, a chat interface
          simulates an AI assistant integrated with a mocked service, which can
          be replaced by a real AI engine in a production setting. By adding MCP
          capabilities—such as search tools and data analysis integrated with
          the dashboard—it would be possible to create a robust AI-powered
          analytical tool. This layer could interpret natural language queries,
          translate them into structured filters or visualizations, and return
          actionable insights to the user.
        </Paragraph>
      </section>
    </TabWrapper>
  );
}
