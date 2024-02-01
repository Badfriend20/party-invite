import Background from './components/Background';
import SliderBanner from './components/SliderBanner';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
function App() {
  const style = {
    maxWidth: "320px",
    minWidth: "320px",
    marginRight: "auto",
    marginLeft: "auto",
    position: "relative"
  }
  return (
    <div style={style}>
      <SliderBanner />
      <Background />
    </div>
  )
}

export default App
