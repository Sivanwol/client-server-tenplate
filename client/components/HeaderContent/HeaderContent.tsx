import React from 'react';
import {Menu} from "antd";

export type HeadercontentProps = {}

export default function Headercontent({}: HeadercontentProps) {
  return (<div className="HeaderContent">
    <div className="logo"/>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
  </div>);
}
