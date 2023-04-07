import { useSession } from "next-auth/react";
import { ComponentType } from "react";

const withAuthentication = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const ComponentWithAuthentication: React.FC<P> = (props) => {
    const { data: session, status } = useSession();

    if (status === "loading") {
      // TODO: add in a loader component
      return <div>Loading...</div>;
    }

    if (!session) {
      // TODO: add in a redirect to login page
      return <div>Not authenticated</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuthentication;
};

export default withAuthentication;
