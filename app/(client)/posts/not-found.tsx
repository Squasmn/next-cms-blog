import Header from "@/app/components/Header";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <Header title="404 Not Found" />
      <div className="text-center hover:text-purple-500">
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
