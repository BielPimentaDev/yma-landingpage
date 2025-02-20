import Bastidores from './sections/Bastidores';
import FeedbackCliente from './sections/FeedbackCliente';
import Footer from './sections/Footer';
import FormaDeEntregar from './sections/FormaDeEntregar';
import HeroSection from './sections/HeroSection';
import LastCTA from './sections/LastCTA';
import MapSection from './sections/MapSection';
import MelhoresServicos from './sections/MelhoresServicos';
import NossosServicos from './sections/NossosServicos';
import NumbersSection from './sections/NumbersSection';
import QuemSomos from './sections/QuemSomos';
import RealTimeTracker from './sections/RealTimeTracker';

export default function Home() {
	return (
		<main>
			<HeroSection />
			<QuemSomos />
			<NossosServicos />
			<MelhoresServicos />
			<NumbersSection />
			<FormaDeEntregar />
			<FeedbackCliente />
			<RealTimeTracker />
			<MapSection />
			<Bastidores />
			<LastCTA />
			<Footer />
		</main>
	);
}
