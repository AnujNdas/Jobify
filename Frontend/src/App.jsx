import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

