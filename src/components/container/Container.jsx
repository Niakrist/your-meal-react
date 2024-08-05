import React from "react";
import cn from "classnames";

import s from "./Container.module.css";

const Container = ({ className, children }) => {
  return <div className={cn(s.container, className)}>{children}</div>;
};

export default Container;
