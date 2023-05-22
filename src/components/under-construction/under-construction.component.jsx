import image from "../../assets/images/construction.png"
import "./_under-construction.scss"

const UnderConstruction = () => {
  return (
    <div className="construction">
      <img src={image} alt="Construction image" className="construction__image"/>
      <h1 className="construction__header">This page is currently under construction...</h1>
      <p className="construction__text">Please check back later!</p>
    </div>
  )
}

export default UnderConstruction