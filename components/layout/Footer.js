import React from "react";
import userData from "@constants/data";
import SocialLinkNavbar from "@components/commons/SocialLinkNavbar";

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700" />
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div>
            <p>&copy; Jorge Rodríguez Díaz. All Rights Reserved.</p>
          </div>
          <div className="space-x-4 flex flex-row items-center">
            {userData.socialLinks.map((data, idx) => (
              <SocialLinkNavbar {...data} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
