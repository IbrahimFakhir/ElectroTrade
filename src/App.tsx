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
import { RequireAuth } from "./features/authentication";
import Missing from "./pages/Missing";
import { pages, relativeAdminPath, relativePagesPath } from "./utils/pages";
import Unauthorized from "./pages/Unauthorized";

import Admin from "./pages/Admin";

function App() {
	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<Routes>

					<Route path={pages.get("authentication")?.path} element={<AuthLayout />}>
						<Route index element={ <Authentication /> } />
						<Route path={pages.get("unauthorized")?.path} element={<Unauthorized />} />
					</Route>

					<Route path={relativePagesPath} element={<Layout />}>
						<Route element={<RequireAuth allowedRoles={[1, 2]} />}>
							<Route index element={<Welcome />} />
							<Route path={pages.get("portfolio")?.path} element={<Portfolio />} />
							<Route path={pages.get("market")?.path} element={<Market />} />
							<Route path={pages.get("account")?.path} element={<Account />} />
						</Route >
					</Route>

					<Route path={relativeAdminPath} element={<Layout />}>
						<Route element={<RequireAuth allowedRoles={[2]} />}>
							<Route index element={<Admin />} />
						</Route>
					</Route>

					<Route path="*" element={<Missing />} />
					
				</Routes>
			</ThemeProvider>
		</AuthProvider>
	)
}

export default App;
