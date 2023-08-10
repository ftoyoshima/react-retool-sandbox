import './App.css'

import Retool from 'react-retool'

function App() {
  return (
    <>
      <Retool
        width={1400}
        height={800}
        url="https://tractian.retool.com/apps/react-embed-minimal"
        data={{ testProp: 'I can send things to Retool!' }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onData={(data: any) => console.log('🎉 I can listen to Retool: ', data)}
      />
    </>
  )
}

export default App
