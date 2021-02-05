import { useAuthenticationContext } from "context/Authentication/context"

export default () => {
  const { userDataMutate } = useAuthenticationContext();

  return () => {
    userDataMutate(null);
  }
}