import React from 'react'
import { render } from 'react-dom'
import { Button } from 'antd'
import './index.css'
const Ha = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
)
render(<Ha />, document.getElementById("app"))
