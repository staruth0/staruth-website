import company from '../../../assets/images/about/company.svg';


const Header = () => {
  return (
    <header id="header-about" className="container">
    <div className="intro-text">
      <p>
        iStore is a leading provider of a wide range of innovative Apple
        products. With a deep passion for technology and a commitment to
        exceptional customer experience, we have established ourselves as a
        trusted destination for Apple enthusiasts.
      </p>
    </div>
    <div>
      <img src={company} alt="" />
    </div>

  </header>

  )
}

export default Header
