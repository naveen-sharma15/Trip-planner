import React from 'react'
import { Button } from '../button'
function header() {
  return (
    <div className='p-3 shadow-sm flex w-full justify-between items-center px-5'>
        <img src="/logo.svg" alt="" />
        <div>
          <Button>Sign In</Button>
        </div>
    </div>
  )
}

export default header