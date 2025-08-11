import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/derek')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/derek"!</div>
}
