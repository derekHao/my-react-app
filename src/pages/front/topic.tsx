import { createFileRoute } from '@tanstack/react-router';
import { FrontLayout } from '@/layouts/FrontLayout';

export const Route = createFileRoute('/front/topic')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <FrontLayout>
      <div>Hello "/front/topic"!</div>
    </FrontLayout>
  );
}
