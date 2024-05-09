import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  tags?: boolean;
}

const Header = ({ title = "", tags = false }: Props) => {
  return (
    <header className="py-14 px-4 mb-12 text-center border-b dark:border-purple-900">
      <h2 className="uppercase text-2xl m-auto max-w-2xl font-bold ">
        {title}
      </h2>
      {tags && (
        <div className="mt-2 text-xs hover:text-purple-500">
          <Link href="/tag">#tags</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
