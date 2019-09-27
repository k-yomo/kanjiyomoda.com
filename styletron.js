import { Client, Server } from 'styletron-engine-atomic'
import { DebugEngine } from 'styletron-react'

const getHydrateClass = () =>
  document.getElementsByClassName('_styletron_hydrate_')

// Code below causes error in typescript..
export const styletron =
  typeof window === 'undefined'
    ? new Server()
    : new Client({
      hydrate: getHydrateClass()

    })

export const debug =
  process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine()
