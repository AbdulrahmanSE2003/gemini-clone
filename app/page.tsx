'use client'

import Chat from "./_components/Chat";
import Sidebar from "./_components/Sidebar";
import AboutModal from "./_components/AboutModal";
import { useState } from 'react';

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="min-h-screen flex overflow-hidden">

      <AboutModal isOpen={isModalOpen} onClose={closeModal} />
      <Sidebar />
      <Chat />
    </section>
  );
};

export default page;
