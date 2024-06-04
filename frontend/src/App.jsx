import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultView from "./components/defaultView/defaultView";
import Home from "./views/Home/Home";
import CarList from "./views/CarList/CarList";
import AddCar from "./views/AddCar/AddCar";

const App = () => {
	return (
		<Router>
			<DefaultView>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/car-list" element={<CarList />} />
					<Route path="/add-car" element={<AddCar />} />
				</Routes>
			</DefaultView>
		</Router>
	);
};

export default App;
