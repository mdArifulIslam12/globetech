import {
    LinkProps,
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";;


function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color: match ? "#D7F561" : "#8FE5FF",fontWeight: match ? "700" : "500"  }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }
  export default CustomLink