import Link from "next/link";

import { Lilita_One } from "next/font/google";
import { BackArrow } from "./SvgComponent";

const LilitaOne = Lilita_One({ subsets: ["latin"], weight: ["400"] });

const CMSNavbar = () => {
  return (
    <div className="flex justiify-between items-center py-1 px-5">
      <Link href="/">
        <BackArrow className="w-6 h-6 bg-purple-500 mr-5" />
      </Link>
      <div className={`${LilitaOne.className} text-3xl dark:text-amber-50 `}>
        Dev<span className="text-purple-500">Blog</span>
      </div>
    </div>
  );
};

export default CMSNavbar;
