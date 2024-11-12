// "use client";

// import { AllUsersType } from "@/types";

// import Image from "next/image";
// import React from "react";

// type Props = {
//   data?: AllUsersType;
// };

// const Chat: React.FC<Props> = ({ data }) => {
//   return (
//     <div className="w-full flex items-center justify-between py-4 px-6 bg-white border-b border-gray-400 hover:bg-gray-200 opacity-80 overflow-hidden cursor-pointer">
//       <div className="flex justify-start items-center gap-4">
//         <Image
//           src={data?.image}
//           alt="user"
//           width={50}
//           height={50}
//           className="rounded-full"
//         />
//         <div className="flex flex-col">
//           <p>{data.phone}</p>
//           <p className="text-sm">{data.firstName}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;
"use client";

import { AllUsersType } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  data?: AllUsersType;
};

const Chat: React.FC<Props> = ({ data }) => {
  if (!data) {
    // Handle the case where `data` is undefined (optional: show a placeholder)
    return null;
  }

  return (
    <div className="w-full flex items-center justify-between py-4 px-6 bg-white border-b border-gray-400 hover:bg-gray-200 opacity-80 overflow-hidden cursor-pointer">
      <div className="flex justify-start items-center gap-4">
        <Image
          src={data.image || "/default-image.png"} // Fallback to a default image if `data.image` is undefined
          alt="user"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <p>{data.phone || "No phone available"}</p>{" "}
          {/* Fallback text if `phone` is undefined */}
          <p className="text-sm">{data.firstName || "Anonymous"}</p>{" "}
          {/* Fallback text if `firstName` is undefined */}
        </div>
      </div>
    </div>
  );
};

export default Chat;
