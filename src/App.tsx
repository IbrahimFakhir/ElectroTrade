import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/mui-theme";
import Layout from "./layouts/MainLayout/Layout";
import Welcome from "./pages/Welcome";
import Portfolio from "./pages/Portfolio";
import Market from "./pages/Market";
import Account from "./pages/Account";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import Authentication from "./pages/Authentication";
import Missing from "./pages/Missing";
import { pages, relativePagesPath } from "./utils/pages";

function App() {
	console.log(pages.get("portfolio")?.path)
	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/" element={<AuthLayout />}>
						<Route index element={ <Authentication /> } />
					</Route>
					{/* protect these routes */}
					<Route path={relativePagesPath} element={<Layout />}>
							<Route index element={<Welcome />} />
							<Route path={pages.get("portfolio")?.path} element={<Portfolio />} />
							<Route path={pages.get("market")?.path} element={<Market />} />
							<Route path={pages.get("account")?.path} element={<Account />} />
					</Route>

					<Route path="*" element={<Missing />} />
				</Routes>
			</ThemeProvider>
		</AuthProvider>
	)
}

export default App;
