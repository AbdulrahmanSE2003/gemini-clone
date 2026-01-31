import Chat from "./_components/Chat";
import Sidebar from "./_components/Sidebar";

const page = () => {
  return (
    <section className="min-h-screen flex overflow-hidden">
      <Sidebar />
      <Chat />
    </section>
  );
};

export default page;
