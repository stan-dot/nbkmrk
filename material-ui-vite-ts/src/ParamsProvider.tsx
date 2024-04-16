import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type RouteContextType = {
  params: URLSearchParams;
  setParams: (p: URLSearchParams) => void
  readPath: string;
  setReadPath: (p: string) => void
}

const defaultRouteContext: RouteContextType = {
  params: new URLSearchParams(),
  readPath: "",
  setParams: function (p: URLSearchParams): void {
    throw new Error("Function not implemented.");
  },
  setReadPath: function (p: string): void {
    throw new Error("Function not implemented.");
  }
};

const RouteContext = createContext<RouteContextType>(defaultRouteContext);
export const useRouteContext = () => useContext(RouteContext);

type RouteProviderProps = {
  children: ReactNode;
}


export function RouteProvider({ children }: { children: React.ReactElement[] }) {
  const [params, setParams] = useState(new URLSearchParams(window.location.search));
  const [readPath, setReadPath] = useState(window.location.pathname);

  const value: RouteContextType = {
    params,
    setParams,
    readPath,
    setReadPath,
  };
  useEffect(() => {
    window.alert(`new params: ${params}`)
  }, [params])

  console.log(value);
  return <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
};
