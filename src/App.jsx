import './App.css'
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function App() {
  return (
    <>
      <div id = 'App'>
        <nav className = 'navBar'>
          <ul>
            <li><a href="#poemTitle">Poem</a></li>
            <li><a href = '#sketchesTitle'>Sketches</a></li>
            <li><a href = '#greetingsTitle'>Greetings</a></li>
            <li><a href = '#footer1'>Contact Me</a></li>
          </ul>
        </nav>
        <div id = 'div1'>
          <div id = 'left'>
            <div id = 'left1'>WISHING YOU</div>
            <div id = 'left2'>A VERY</div>
            <div id = 'left3'>HAPPY BIRTHDAY</div>
            <div id = 'left4'>RESHMA!</div>
          </div>
          <img id = 'rapunzel2' src='/rapunzel2.jpg' />
          <div id = 'right'>
          </div>
        </div>
        <div id = 'poemTitle'>POEM</div>
        <div id = 'poem'>
          On this auspicious day of August Eleven<br />

          To Reshma we wish a Happy Birthday <br />

          May obstacles and misfortunes be driven from her way<br />

          And joy and abundance be bestowed her from heaven<br /> <br />


          May she be enriched in wisdom and prudence<br />

          And be endowed with wealth and knowledge <br />

          May she have the first rank in college<br />

          And be prosperous in every sense<br /> <br />


          May her exams be written with an ink of fire<br />

          May she rise above Khusboo Verma and Khushaal Kumar<br />

          May opportunities come and find her from afar<br />

          And in an instant be fulfilled her every desire<br /><br /> 


          From you one thing I do request <br />

          At this poem of mine take no offence <br />

          This poem from the spirit does commence <br />

          To decorate your birthday with these lines was my quest <br /> <br />


          Respected Lady of high honour <br />

          May Your Majesty be pleased with this poem of mine <br />

          Else may I be cursed in every corner <br />

          If you don't like this work of mine <br /> <br />
        </div>
        <div id = 'sketchesTitle'>SKETCHES</div>
        <div id = 'sketches'>
          <div id = 'sketchRow1'>
            <img className='sketch' src = '/sketch1.jpg' />
            <img className='sketch' src = '/sketch2.jpg' />
            <img className='sketch' src = '/sketch3.jpg' />
          </div>
          <div id = 'sketchRow2'>
            <img className='sketch' src = '/sketch4.jpg' />
            <img className='sketch' src = '/sketch5.jpg' />
          </div>
        </div>
        <div id = 'greetingsTitle'>GREETINGS</div>
        <img id = 'rapunzel1' src = '/rapunzel1.jpg' />
        <div id = 'greetings'>
          <div id = 'greetingsPara'>
          Happy Birthday Reshma! May God bless you with infinite joys and blessings throughout your life.<br />Congratulations on securing 9.077 CGPA in your 4th Semester! Keep it up, and try to get 9.6 next time.<br /> Hope you like this website. It took some effort to make it. This is for your birthday. Happy Birthday again!
          </div>
        </div>
        <footer id = 'footer1'>
          <div id = 'footerLeft'>
            <div id = 'footerLeftTitle'>
              RESHMA'S BIRTHDAY WEBSITE
            </div>
            <br />
            <div id = 'footerLeftPara'>
              This website has been made by Ayush Kumar.<br /> It is for your birthday on August 11, 2025 (Today).<br />I have used ReactJS and CSS for making this website.<br />Hope you like it.
            </div>
          </div>
          <div id = 'footerRight'>
            <div id = 'footerRightTitle'>CONTACT ME (FOR FEEDBACK)</div>
            <div id = 'email'><IoMdMail size={30} /><div id = 'emailText'>Email: captainayushkumar@gmail.com</div></div>
            <div id = 'whatsapp'><FaWhatsapp size={30} /><div id = 'whatsappText'>WhatsApp: +91 9289547655</div></div>
            <div id = 'linkedin'><FaLinkedin size={30} /><div id = 'linkedinText'>LinkedIn: https://www.linkedin.com/in/ayush-kumar-2455b9323/</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
