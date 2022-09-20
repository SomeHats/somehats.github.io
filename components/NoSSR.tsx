import { ReactNode, useEffect, useLayoutEffect, useState } from "react";

export function NoSSR({ children }: { children: ReactNode }) {
    const [shouldShow, setShouldShow] = useState(false);
    useEffect(() => {
        setShouldShow(true);
    }, [shouldShow]);

    return shouldShow ? <>{children}</> : null;
}
