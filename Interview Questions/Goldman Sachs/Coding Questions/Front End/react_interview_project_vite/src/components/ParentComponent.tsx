import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent: React.FC = () => {
  const [message, setMessage] = useState("")

  return (
    <div>
      <ChildComponent onSendData={setMessage} />
      <p>Message from child: {message}</p>
    </div>
  )
}

export default ParentComponent
