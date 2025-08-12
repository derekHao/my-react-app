import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/front/routetest')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><Navbar/><Outlet /></div>
}
