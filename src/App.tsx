import React from 'react'
import './App.css'
import { Button } from './components/app/Button'
import { BaseLayout } from './layouts/BaseLayout'

function App() {
  return (
    <BaseLayout>
      <>
        <div>
          <span>{`Let's get started.....`}</span>
          <Button label="Get Started" backgroundColor="green"></Button>
        </div>
      </>
    </BaseLayout>
  )
}

export default App
