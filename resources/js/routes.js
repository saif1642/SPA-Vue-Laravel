import Home from './components/Home';
import About from './components/About';

export default {
	made: "history",
	routes: [
		{
			path:'/',
			component: Home
		},

		{
			path:'/about',
			component: About
		}
	]
}