// "use client";

// import AppModal from "@/components/AppModal/Index";
// import Chat from "@/components/Chat";
// import SearchHeader from "@/components/SearchHeader";
// import { AllUsers, AllUsersType } from "@/types";
// import { IconButton } from "@mui/material";
// import React from "react";

// type Props = {
//   data: AllUsers;
// };
// // react fc = fucntional component
// const ChatSidebar: React.FC<Props> = ({ data }) => {
//   const { users } = data;
//   return (
//     <div className="w-full h-full">
//       <SearchHeader></SearchHeader>
//       <IconButton>
//         <AppModal
//           icon={<button className="border border-black text-sm">Leads</button>}
//           title="All Contacts"
//           modalType="chat"
//         />
//       </IconButton>
//       {!!users &&
//         users?.map((user: AllUsersType) => <Chat key={user.id} {data = {user}}></Chat>)}
//     </div>
//   );
// };
// export default ChatSidebar;
"use client";

import AppModal from "@/components/AppModal/Index";
import Chat from "@/components/Chat";
import SearchHeader from "@/components/SearchHeader";
import { AllUsers, AllUsersType } from "@/types";
import { IconButton } from "@mui/material";
import React from "react";

type Props = {
  data: AllUsers;
};

const ChatSidebar: React.FC<Props> = ({ data }) => {
  const { users } = data;
  return (
    <div className="w-full h-full">
      <SearchHeader />
      <IconButton>
        <AppModal
          icon={<button className="border border-black text-sm">Leads</button>}
          title="All Contacts"
          modalType="chat"
        />
      </IconButton>
      {!!users &&
        users.map((user: AllUsersType) => <Chat key={user.id} data={user} />)}
    </div>
  );
};

export default ChatSidebar;
