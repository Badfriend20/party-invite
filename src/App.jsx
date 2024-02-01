import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Background from './components/Background';
import SliderBanner from './components/Slider/SliderBanner';
function App() {
  const style = {
    width: "480px",
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
