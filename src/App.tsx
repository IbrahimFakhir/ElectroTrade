import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/mui-theme";
import Layout from "./layouts/MainLayout/Layout";
import Portfolio from "./pages/Portfolio";
import Market from "./pages/Market";
import Account from "./pages/Account";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import Authentication from "./pages/Authentication";
import { pages } from "./utils/pages";

function App() {
	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/" element={<AuthLayout />}>
						<Route index element={ <Authentication /> } />
					</Route>
					{/* protect these routes */}
					<Route element={<Layout />}>
							<Route path={ pages.get('portfolio')?.path } element={<Portfolio />} />
							<Route path={ pages.get('market')?.path } element={<Market />} />
							<Route path={ pages.get('account')?.path } element={<Account />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</AuthProvider>
	)
}

export default App;
