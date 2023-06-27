import { Button } from './components/ui/button'
import { Typography } from './components/ui/typography'

export function App() {
  return (
    <>
      <div>Hello</div>
      <Button>button</Button>
      <Typography variant="large">Hello</Typography>
      <Typography variant="body1">Hello</Typography>
      <Typography as="p" variant="h1">
        Hello
      </Typography>
    </>
  )
}
