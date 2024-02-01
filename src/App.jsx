import Background from './components/Background';
import SliderBanner from './components/SliderBanner';
function App() {
  const style = {
    width: "320px",
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
