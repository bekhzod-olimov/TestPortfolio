import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";

export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Do you have any AI/ML-related application in your mind? </p>
        <p>Contact me now for a FREE consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:bekhzod.olimov@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:bekhzod.olimov@gmail.com">bekhzod.olimov@gmail.com</a>
        </div>
        <div>
        <a href="tel:+82 10-5742-4344"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+82 10-5742-4344">(+82) 10-5742-4344</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}