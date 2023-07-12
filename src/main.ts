import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

//import './topics/01-basic-types.ts' 
//import './topics/02-object-interface.ts'
//import './topics/03-functions.ts'
//import './topics/04-homework-types.ts'
//import './topics/05-basic-destructuring.ts'
// import './topics/06-function-destructuring.ts'
// import './topics/07-import-exports.ts'
// import './topics/08-classes.ts'
// import './topics/09-generics.ts'
// import './topics/10-decorations.ts'
import './topics/11-optional-chaining.ts'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola Mundo</h1>
    <h2>Viridiana Solis</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
