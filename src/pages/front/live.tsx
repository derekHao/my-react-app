import { createFileRoute } from '@tanstack/react-router';
import { FrontLayout } from '@/layouts/FrontLayout';

export const Route = createFileRoute('/front/live')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <FrontLayout>
      <div>live</div>
    </FrontLayout>
  );
}
