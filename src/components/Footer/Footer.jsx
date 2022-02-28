import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faYoutube, faInstagram, faOdnoklassniki, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer__container">
          <div className="footer__social">
            <h2 className="h2HeaderWhite">ООО &laquo;Филберт&raquo;</h2>
            <div className="footer__links">
              <ul>
                <li>
                  <a href="https://vk.com/filbert_collection" target="blank">
                    <FontAwesomeIcon icon={faVk} />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCKxFuJI6SXeIVHn1ZiRha1A" target="blank">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/filbert_collection" target="blank">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="https://ok.ru/group/56474097287340" target="blank">
                    <FontAwesomeIcon icon={faOdnoklassniki} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/filbertcollection" target="blank">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__rights">
            <p>
              ООО &laquo;Филберт&raquo; 2022.<br />Все права защищены
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
