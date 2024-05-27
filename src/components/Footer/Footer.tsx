import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import kaggle from '../../assets/kaggle.svg'
import githubIcon from '../../assets/github.svg'
import google_scholar from '../../assets/google_scholar.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://www.linkedin.com/in/bekhzod-olimov-doctor-of-engineering-33059bb1/" className="logo">
        <span>Information</span>
      </a>
      <div>
        <p>
          This Website is powered by <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.kaggle.com/killa92"
          target="_blank"
          rel="noreferrer"
        >
          <img src={kaggle} alt="Kaggle" />
        </a>
        <a
          href="https://github.com/bekhzod-olimov"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://scholar.google.com/citations?user=3QhMoi0AAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={google_scholar} alt="Google Scholar" />
        </a>
        <a
          href="https://t.me/bekhzodAI"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a>
        <a
          href="https://www.instagram.com/beki___oli/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
