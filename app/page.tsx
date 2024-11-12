import ChatSidebar from "@/modules/ChatSidebar";
import { getUsers } from "@/lib/firebase/helper";
import MainScreen from "@/modules/MainScreen";
export default async function Home() {
  const fetchedUsers = await getUsers();

  return (
    <main className="flex h-screen overflow-hidden">
      <div className="bg-gray-200 w-1/3 overflow-y-auto">
        {/*for sidebar */}
        <ChatSidebar data={fetchedUsers}></ChatSidebar>
      </div>
      <div className="w-full overflow-y-auto">
        <MainScreen />
      
      </div>
    </main>
  );
}
