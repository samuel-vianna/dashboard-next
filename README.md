# Dashboard Next (BrandAI Mock)

This is a small dashboard demo built with **Next.js**, **TypeScript**, **Ant Design**, **Tailwind CSS**, **React Query**, and **Zustand** for state management.
It contains mock data and a front-end only AI assistant called **"BrandAI / Mila"** to demonstrate how an AI or MCP layer might interact with the UI.

The dashboard showcases clear chart visualizations, handles missing data gracefully, and simulates AI interactions for exploratory data analysis.

---

## Tech Stack

- **Framework & Language:** Next.js, TypeScript
- **UI Components:** Ant Design, Tailwind CSS
- **Charts:** ECharts, echarts-for-react
- **State Management:** Zustand
- **Data Fetching:** React Query
- **Testing & Linting:** ESLint, TypeScript type checking

---

## Architecture Overview

The project follows a modular structure with clear separation of concerns:

```
.
├── app              # Main entry point, global layout
├── components       # Reusable UI components
├── data             # Mock data
├── hooks            # Custom hooks
├── layout           # Layouts for different tabs
├── services         # API/service layer
├── store            # Zustand state stores
├── styles           # Global and Tailwind styles
├── types            # Type definitions
└── utils            # Utility functions
```

Key features include:

- **Global state** via Zustand for consistent theme and data handling.
- **Data fetching** handled with React Query with caching and error handling.
- **Charts** using ECharts for interactive visualization.
- **Responsive design** with Tailwind CSS.
- **AI/MCP simulation** via a mock chat assistant interface.

---

## Features

- **Overview Section:** Displays total sales and average sales per week.
- **Bar Chart:** Compares brands over time.
- **Pie Chart:** Displays total sales by brand to highlight performance.
- **Brand-Specific Section:** Lets users select a brand and view detailed trends ("Week-over-Week" or "Cumulative Total").
- **Summary Table:** Shows average sales per category, grouped by brand.
- **Mock AI Assistant:** Simulates AI queries and responses with a simple chat UI.

---

## Setup

Dependencies:

- Node.js (18.x)
- NPM (9.x)

### Install dependencies

```bash
npm install
```

---

### Run locally

Start the development server:

```bash
npm run dev
```

Or Build and start the production server:

```bash
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Mock AI UI

The AI assistant UI includes an input with the placeholder:

> "Ask to Mila.."

When you submit a question the UI shows a short loading state (~500ms) and then displays the placeholder response:

> "Mila would return a filtered chart for Brand A Supplements."

This is a front-end mock only; there is no external AI integration.

---

## Notes

### Handling null / invalid data

We replace null values with zero, as they represent weeks with no sales.
These weeks are still included in the calculations to ensure that averages and totals are not distorted by missing data.
UI components defensively check for undefined fields to prevent errors.

### Chart & Table design thoughts

Charts should prioritize clarity and effective comparison. In this dashboard, we start with an overview section showing total sales and average sales per week.
This is followed by a bar chart comparing brands over time and a pie chart illustrating total sales by brand to highlight which brand performed best.
A dedicated section presents brand-specific charts, allowing users to select a brand and view detailed trends either as “Week-over-Week” or “Cumulative Total.”
Finally, a summary table displays the average sales per category, grouped by brand, enabling quick comparison of category performance.
Charts include consistent color coding, legends, hover tooltips, and clear handling of missing data.

### How AI / MCP could extend this project

An AI or MCP layer could significantly enhance the project by providing data-driven insights, conducting market research, and generating competitor comparisons.
In this example, a chat interface simulates an AI assistant integrated with a mocked service, which can be replaced by a real AI engine in a production setting.
By adding MCP capabilities—such as search tools and data analysis integrated with the dashboard—it would be possible to create a robust AI-powered analytical tool.
This layer could interpret natural language queries, translate them into structured filters or visualizations, and return actionable insights to the user.

---

## Future Improvements

- Implement real AI integration for BrandAI using GPT or similar models.
- Add authentication and rate-limiting for API usage.
- Extend MCP capabilities with anomaly detection and advanced analytics.
- Add export functionality for charts and tables (CSV, PDF).

---

## Where to find the docs

The same notes are available inside the app under the **About** tab.
