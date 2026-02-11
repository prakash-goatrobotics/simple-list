import React from "react";
import { List, Divider } from "antd";
import "antd/dist/reset.css";

// Dummy icon components
const Earth = () => <span>🌍</span>;
const Route = () => <span>🛣️</span>;
const Bot = () => <span>🤖</span>;

const dummySites = [
  {
    id: 1,
    name: "Site Alpha",
    code: "A01",
    location: "New York",
    routes: ["Route 1", "Route 2"],
    robots: ["Robot A", "Robot B", "Robot C"],
  },
  {
    id: 2,
    name: "Site Beta",
    code: "B02",
    location: "London",
    routes: ["Main Route"],
    robots: ["Robot X"],
  },
  {
    id: 3,
    name: "Site Gamma",
    code: null,
    location: null,
    routes: [],
    robots: [],
  },
];

export default function App() {
  const paginatedSites = dummySites;

  return (
    <div className="p-6">
      <List
        itemLayout="horizontal"
        dataSource={paginatedSites}
        className="h-[85vh] overflow-y-auto"
        renderItem={(site) => {
          const hasRoutes = site.routes.length > 0;
          const hasRobots = site.robots.length > 0;

          return (
            <List.Item
              key={site.id}
              className="group hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="flex w-full items-center justify-between rounded-lg px-4 cursor-pointer">
                <List.Item.Meta
                  className="pt-2"
                  title={<p className="pb-1 font-semibold">{site.name}</p>}
                  description={
                    <div className="grid grid-cols-12 items-center pb-1 text-xs">
                      {/* Code */}
                      <div className="text-gray-500 col-span-1 flex gap-2">
                        <p>{site.code ?? "-"}</p>
                      </div>

                      <div className="text-center">
                        <Divider type="vertical" />
                      </div>

                      {/* Location */}
                      <div className="text-gray-500 col-span-2 flex gap-2">
                        <Earth />
                        {site.location ?? "-"}
                      </div>

                      <div className="text-center">
                        <Divider type="vertical" />
                      </div>

                      {/* Routes */}
                      <div className="text-gray-500 col-span-2 flex gap-2">
                        <Route />
                        <div className="relative inline-block w-full overflow-hidden">
                          <p className="transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-0">
                            {hasRoutes
                              ? `${site.routes.length} ${
                                  site.routes.length === 1 ? "Route" : "Routes"
                                }`
                              : "-"}
                          </p>

                          <p className="absolute top-0 left-0 translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            {hasRoutes ? site.routes.join(", ") : "-"}
                          </p>
                        </div>
                      </div>

                      <div className="text-center">
                        <Divider type="vertical" />
                      </div>

                      {/* Robots */}
                      <div className="text-gray-500 col-span-3 flex gap-2">
                        <Bot />
                        <div className="relative inline-block w-full overflow-hidden">
                          <p className="transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-0">
                            {hasRobots ? `${site.robots.length} Robots` : "-"}
                          </p>

                          <p className="absolute top-0 left-0 translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            {hasRobots ? site.robots.join(", ") : "-"}
                          </p>
                        </div>
                      </div>
                    </div>
                  }
                />

                {/* Action buttons */}
                <div className="flex items-center text-sm opacity-0 transition-opacity space-x-4 duration-300 group-hover:opacity-100">
                  <button className="text-blue-500">Edit</button>
                  <button className="text-red-500">Delete</button>
                </div>
              </div>
            </List.Item>
          );
        }}
      />
    </div>
  );
}
