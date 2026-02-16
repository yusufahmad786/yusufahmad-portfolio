import React from 'react'
import { Button } from './Button'

export default {
  title: 'UI/Button',
  component: Button
}

export function Primary(){
  return <Button>Primary</Button>
}

export function Ghost(){
  return <Button variant="ghost">Ghost</Button>
}

export function Soft(){
  return <Button variant="soft">Soft</Button>
}
