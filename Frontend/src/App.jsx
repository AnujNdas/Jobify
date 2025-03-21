import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <div className="min-h-full">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

