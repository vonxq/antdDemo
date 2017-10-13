import React from 'react'
import { render } from 'react-dom'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane
import './index.css'
const Ha = () => (
  <div className="App">
    <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="标签页1" key="1">content of tabpane1</TabPane>
        <TabPane tab="标签页2" key="2">content of tabpane2</TabPane>
        <TabPane tab="标签页3" key="3">
          <Tabs defaultActiveKey="31">
            <TabPane tab="标签页3-1" key="31">content of tabpane1</TabPane>
            <TabPane tab="标签页3-2" key="32">content of tabpane2</TabPane>
          </Tabs>
        </TabPane>
    </Tabs>
  </div>
)
render(<Ha />, document.getElementById("app"))
