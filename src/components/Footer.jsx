import React, { Component } from 'react'
import '../styles/Footer.scss'
import logo from '../styles/images/logo__header.png'
import VkIcon from '../styles/images/social/VK.svg'
import TelIcon from '../styles/images/social/Telegram.svg'
import InsIcon from '../styles/images/social/Inst.svg'
class Footer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <footer>
        <div className='footer__wrapper'>
          <header className="footer__content">
            <div className="footer__content-logo">
              <img src={logo} alt=""/>
            </div>
            <div className="copy">
              <p>Все права защищены 2007-2018</p>
            </div>
            <div className="social__content">
              <ul className="social__links">
                <li className="social__links-vk">
                  <a href="http://vk.com"><img src={VkIcon} alt=""/></a>
                </li>
                <li className="social__links-telegram">
                  <a href="#"><img src={TelIcon} alt=""/></a>
                </li>
                <li className="social__links-insta">
                  <a href="#"><img src={InsIcon} alt=""/></a>
                </li>
              </ul>
            </div>
          </header>
        </div>
      </footer>
    )
  }
}

export default Footer
