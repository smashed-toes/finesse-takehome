import { useParams } from "react-router-dom";

type RequiredParams<K extends string = string> = {
  readonly [key in K]: string;
};

export const useRequiredParams = <P extends string = string>(
  requiredParamNames: P[]
): RequiredParams<(typeof requiredParamNames)[number]> => {
  const routeParams = useParams();

  requiredParamNames.forEach((paramName) => {
    const parameter = routeParams[paramName];
    if (!parameter) {
      throw new Error(
        `This component should not be rendered on a route which does not have the ${paramName} parameter`
      );
    }
  });

  return routeParams as RequiredParams<(typeof requiredParamNames)[number]>;
};
