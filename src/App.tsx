import React from "react";
import AuthPage from "./pages/AuthPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import { AuthProvider } from "./contexts/AuthContext";
// import { FinanceProvider } from "./contexts/FinanceContext";
// import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    // <ThemeProvider>
    // <AuthProvider>
    //   <FinanceProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/dashboard" />
          </Routes>
        </BrowserRouter>
  //     </FinanceProvider>
  //   </AuthProvider>
  //   </ThemeProvider>
  );
}

export default App;
