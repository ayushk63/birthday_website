import "./App.css";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import rapunzel3 from "./rapunzel3.jpg";
import rapunzel2 from "./rapunzel2.jpg";
import rapunzel1 from "./rapunzel1.jpg";
import sketch1 from "./sketch1.jpg";
import sketch2 from "./sketch2.jpg";
import sketch3 from "./sketch3.jpg";
import sketch4 from "./sketch4.jpg";
import sketch5 from "./sketch5.jpg";
import sketch6 from "./sketch6.jpg";

export default function App() {
  return (
    <>
      <div id="App">
        <nav className="navBar">
          <ul>
            <li>
              <a href="#poemTitle">Poem</a>
            </li>
            <li>
              <a href="#sketchesTitle">Sketches</a>
            </li>
            <li>
              <a href="#greetingsTitle">Greetings</a>
            </li>
            <li>
            <a href="#prayerTitle">Prayer</a>
            </li>
            <li>
              <a href="#footer1">Contact Me</a>
            </li>
          </ul>
        </nav>
        <div id="div1">
          <div id="left">
            <div id="left1">WISHING YOU</div>
            <div id="left2">A VERY</div>
            <div id="left3">HAPPY BIRTHDAY</div>
            <div id="left4">RESHMA!</div>
          </div>
          <img id="rapunzel2" src={rapunzel2} />
          <div id="right"></div>
        </div>
        <div id="poemTitle">POEM</div>
        <div id="poem">
          On this auspicious day of August Eleven
          <br />
          To Reshma we wish a Happy Birthday <br />
          May obstacles and misfortunes be driven from her way
          <br />
          And joy and abundance be bestowed her from heaven
          <br /> <br />
          May she be enriched in wisdom and prudence
          <br />
          And be endowed with wealth and knowledge <br />
          May she have the first rank in college
          <br />
          And be prosperous in every sense
          <br /> <br />
          May her exams be written with an ink of fire
          <br />
          May she rise above Khusboo Verma and Khushaal Kumar
          <br />
          May opportunities come and find her from afar
          <br />
          And in an instant be fulfilled her every desire
          <br />
          <br />
          From you one thing I do request <br />
          At this poem of mine take no offence <br />
          This poem from the spirit does commence <br />
          To decorate your birthday with these lines was my quest <br /> <br />
          Respected Lady of high honour <br />
          May Your Majesty be pleased with this poem of mine <br />
          Else may I be cursed in every corner <br />
          If you don't like this work of mine <br /> <br />
          
          May she drink from the well of success<br />
          And climb the stairs of her career <br />
          With courage and enthusiasm fresh <br />
          May she turn over every barrier <br /> <br />
          
          In this world full of evil and guile <br />
          May her steps be protected O LORD <br />
          May her struggles be weak and docile <br />
          And her courage be a fiery sword <br /> <br />
        </div>
        <div id="sketchesTitle">SKETCHES</div>
        <div id="sketches">
          <div id="sketchRow1">
            <img className="sketch" src={sketch1} />
            <img className="sketch" src={sketch2} />
            <img className="sketch" src={sketch3} />
          </div>
          <div id="sketchRow2">
            <img className="sketch" src={sketch4} />
            <img className="sketch" src={sketch5} />
            <img className="sketch" src={sketch6} />
          </div>
        </div>
        <div id="greetingsTitle">GREETINGS</div>
        <img id="rapunzel1" src={rapunzel1} />
        <div id="greetings">
          <div id="greetingsPara">
            Happy Birthday Reshma! May God bless you with infinite joys and
            blessings throughout your life.
            <br />
            Congratulations on securing 9.077 CGPA in your 4th Semester! Keep it
            up, and try to get 9.6 next time.
            <br /> Hope you like this website. It took some effort to make it.
            This is for your birthday. Happy Birthday again!
          </div>
        </div>
        <div id = 'prayerTitle'>PRAYER</div>
        <img id = 'rapunzel3' src = {rapunzel3} />
        <div id = 'prayer'>
          <div id = 'prayerPara'>
          In the name of the LORD, we pray for the well-being of Reshma. May she live the life of a princess. May she enjoy her life undisturbed by any calamity or misfortune. O LORD, make her paths straight and drive away every evil from her way. May her obstacles be completely burnt and destroyed. May no evil befall her. May she find success in her every endeavor. May every curse be broken and every evil eye be kept away from her. May no evil person with evil intentions come near her, and may no evil conspiracy be made against her. May she be surrounded with good things and good people, and may she be protected from all harmful things. Amen
          </div>
        </div>
        <footer id="footer1">
          <div id="footerLeft">
            <div id="footerLeftTitle">RESHMA'S BIRTHDAY WEBSITE</div>
            <br />
            <div id="footerLeftPara">
              This website has been made by Ayush Kumar.
              <br /> It is for your birthday on August 11, 2025 (Today).
              <br />I have used ReactJS and CSS for making this website.
              <br />
              Hope you like it.
            </div>
          </div>
          <div id="footerRight">
            <div id="footerRightTitle">CONTACT ME (FOR FEEDBACK)</div>
            <div id="email">
              <IoMdMail size={30} />
              <div id="emailText">Email: captainayushkumar@gmail.com</div>
            </div>
            <div id="whatsapp">
              <FaWhatsapp size={30} />
              <div id="whatsappText">WhatsApp: +91 9289547655</div>
            </div>
            <div id="linkedin">
              <FaLinkedin size={30} id = 'linkedInLogo' />
              <div id="linkedinText">
                LinkedIn: https://www.linkedin.com/in/ayush-kumar-2455b9323/
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
