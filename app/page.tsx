import Chat from "./_components/Chat";
import Sidebar from "./_components/Sidebar";

const page = () => {
  return (
    <section className="h-screen flex">
      <Sidebar />
      <Chat />
    </section>
  );
};

export default page;
