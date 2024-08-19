import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PageContainer from "./CustomComponents/PageBlocks/PageContainer";
import Routing from "./Router/router";

export default function App() {
	return (
		<BrowserRouter>
			<PageContainer>
				<Routing />
			</PageContainer>
			<ToastContainer />
		</BrowserRouter>
	);
}
