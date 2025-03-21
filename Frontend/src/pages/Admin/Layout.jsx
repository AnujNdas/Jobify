import React from "react";
import { Card, CardContent } from "@/components/Ui/card";
const Layout = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-purple-700">
        Dashboard Overview
      </h1>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-purple-500 shadow-md">
          <CardContent>
            <h3 className="text-lg font-semibold text-white">Total Users</h3>
            <p className="text-2xl font-bold text-white">1,245</p>
          </CardContent>
        </Card>
        <Card className="bg-purple-500 shadow-md">
          <CardContent>
            <h3 className="text-lg font-semibold text-white">Active Jobs</h3>
            <p className="text-2xl font-bold text-white">342</p>
          </CardContent>
        </Card>
        <Card className="bg-purple-500 shadow-md">
          <CardContent>
            <h3 className="text-lg font-semibold text-white">Applications</h3>
            <p className="text-2xl font-bold text-white">2,567</p>
          </CardContent>
        </Card>
        <Card className="bg-purple-500 shadow-md">
          <CardContent>
            <h3 className="text-lg font-semibold text-white">Revenue</h3>
            <p className="text-2xl font-bold text-white">$12,430</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <div className="mt-6 bg-purple-500 p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-white">Recent Activities</h2>
        <ul className="space-y-2">
          <li className="text-white">
            John Doe applied for a Web Developer job.
          </li>
          <li className="text-white">
            New company registered: Tech Solutions Inc.
          </li>
          <li className="text-white">
            Frontend Engineer job posted by XYZ Ltd.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
