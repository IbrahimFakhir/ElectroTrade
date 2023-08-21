import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/mui-theme";
import Layout from "./layouts/Layout";
import Authentication from "./pages/Authentication";
import Portfolio from "./pages/Portfolio";
import Market from "./pages/Market";
import Account from "./pages/Account";
import { pages } from "./utils/pages";

function App() {
	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Authentication />} />
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
