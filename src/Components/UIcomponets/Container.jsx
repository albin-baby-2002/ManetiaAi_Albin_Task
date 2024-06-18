import React from 'react'

const Container = ({children,px_none}) => {
  return (
    <div className={`mx-auto max-w-[1440px] ${px_none ? "" : "px-10"}`}>
      {children}
    </div>
  );
}

export default Container
