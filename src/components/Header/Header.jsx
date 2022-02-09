import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { Dropdown } from 'antd';

import SubMenu from './SubMenu';
import logo from '@assets/Logo.svg';
import arrowDown from '@assets/icons/sort-down-solid.svg';
import { setMenuActive } from '@redux/actions/header';
import { sendCounter } from '@redux/actions/pageCounter';

function Header() {
  const dispatch = useDispatch();
  const { menuIndex, mainMenu } = useSelector(({ header }) => header);
  const [ isFullMenu, setIsFullMenu ] = useState(true);
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  const setActiveItem = useCallback((index) => {
    dispatch(setMenuActive(index));
  }, [])

  const menuHandler = () => {
    setIsMenuOpen(!isMenuOpen)
    isMenuOpen ? document.body.style.overflow = ''
    : document.body.style.overflow = 'hidden'
  }

  const closeMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
  }

  const scrollMenu = () => {
    const isTop = window.scrollY < 250;
    const onTop = window.scrollY < 4;

    if (isTop !== true) {
      setIsFullMenu(false);
    } else if (onTop !== false) {
      setIsFullMenu(true);
    }
  }

  const clickCounter = (e) => {
    const link = e.target.dataset.counter;

    if (!link) return;

    switch(link) {
      case 'main':
        dispatch(sendCounter('main'));
        break;
      case 'Инфоцентр':
        dispatch(sendCounter('Инфоцентр'));
        break;
      case 'Мероприятия':
        dispatch(sendCounter('Мероприятия'));
        break;
      case 'Первый день?':
        dispatch(sendCounter('Первый день?'));
        break;

      default:
        return link
    }
  }

  const widthWatcher = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 1022) {
      setIsMenuOpen(false)
      document.body.style.overflow = '';
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollMenu);

    window.addEventListener('resize', widthWatcher)

    return () => {
      window.removeEventListener('scroll', scrollMenu);
    }
  }, []);

  return (
    <div className={classnames({
      'menu': isFullMenu,
      'squeezeMenu': !isFullMenu
    })}>
      <div className="wrapper">
        <div className="header">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="Filbert" />
            </Link>
          </div>

          <div className="header__nav nav">
            <div onClick={menuHandler} className={classnames(
              'nav__icon',
              {
                'menuActive': isMenuOpen
              }
            )}>
              <span></span>
            </div>

            <div className={classnames(
              'nav__body',
              {
                'menuActive': isMenuOpen
              }
            )}>
              {/* ============ Menu start ========== */}
              <ul onClick={clickCounter}>
                <li
                  className={menuIndex === null ? 'active' : ''}
                  onClick={() => setActiveItem(null)}
                >
                  <Link to="/" className="nav__link" onClick={closeMenu} data-counter='main'>Главная</Link>
                </li>

                {
                  mainMenu && mainMenu.map((item, index) => {
                    return (
                      <li
                        key={`${item}_${index}`}
                        className={classnames(
                          'nav__link',
                          {
                            'active': menuIndex === index
                          }
                        )}
                        onClick={() => setActiveItem(index)}
                      >
                        {
                          item === 'Мероприятия' ? <Dropdown overlay={SubMenu}>
                            <Link to="/" className={classnames(
                              'ant-dropdown-link',
                              'nav__link link'
                            )} onClick={closeMenu} data-counter={item}>
                              {item} <div className="link__arrow"><img src={arrowDown} alt="sub menu" /></div>
                            </Link>
                          </Dropdown>
                            : <Link to="/" onClick={closeMenu} data-counter={item}>{item}</Link>
                        }
                      </li>
                    )
                  })
                }
              </ul>
              {/* ============ Menu end ========== */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
