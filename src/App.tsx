import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./layouts/Layout";
import Login from "./pages/Login";
import Portfolio from "./pages/Portfolio";
import Market from "./pages/Market";
import Account from "./pages/Account";
import pages from "./utils/pages";

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Login />} />
					<Route path={ pages.get('portfolio')?.path } element={<Portfolio />} />
					<Route path={ pages.get('market')?.path } element={<Market />} />
					<Route path={ pages.get('account')?.path } element={<Account />} />
				</Route>
			</Routes>
		</AuthProvider>
	)
}

export default App;
