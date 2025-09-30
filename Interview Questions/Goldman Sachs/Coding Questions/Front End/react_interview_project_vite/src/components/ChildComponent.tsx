import React from 'react'

type Props = {
  onSendData: (data: string) => void
}

const ChildComponent: React.FC<Props> = ({ onSendData }) => {
  return (
    <button onClick={() => onSendData("Hello from Child!")}>
      Send Data to Parent
    </button>
  )
}

export default ChildComponent
