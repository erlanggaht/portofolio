import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'
import "@fontsource-variable/roboto-flex";
import "@fontsource/staatliches"


render(
<App />, document.getElementById('app') as HTMLElement
)
