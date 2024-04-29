import { createContext, runInContext } from 'vm'

runInContext('console.log("Hello, VM");', createContext({ console }))
