import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Divider  } from 'antd';

const clickHandle = (e) => {
  console.log(e.key)
}

const SubMenu = () => {
  return (
    <Menu className="dropMenu" onClick={clickHandle}>
      <Menu.Item key="1" className="dropMenu__item">
        <Link rel="noopener noreferrer" to="/photoGalery">
          Фото
        </Link>
      </Menu.Item>

      <Divider className="divider" />

      <Menu.Item key="2" className="dropMenu__item">
        <Link rel="noopener noreferrer" to="/" style={{ color: '#F2F2F2' }}>
          Видео
        </Link>
      </Menu.Item>

      <Divider className="divider" />

      <Menu.Item key="3" className="dropMenu__item">
        <Link rel="noopener noreferrer" to="/" style={{ color: '#F2F2F2' }}>
          Чат
        </Link>
      </Menu.Item>

      <Divider className="divider" />
    </Menu>
  )
}

export default SubMenu;
