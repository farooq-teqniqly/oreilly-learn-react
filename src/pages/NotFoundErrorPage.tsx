import React from "react";

function NotFoundErrorPage() {
  return (
    <div className={`text-center text-slate-600 p-4 flex flex-col`}>
      <span className={`text-5xl`}>404</span>
      <span className={`text-2xl`}>This is not the web page you are looking for.</span>
    </div>
  );
}

export default NotFoundErrorPage;
