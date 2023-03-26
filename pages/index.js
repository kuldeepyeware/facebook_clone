import Header from "@/components/Header";
import Login from "@/components/Login";
import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Widgets from "@/components/Widgets";

export default function Home() {
  const { data: session } = useSession();

  if (!session) return <Login />;
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Socialbook</title>
      </Head>
      <Header />
      <main className='flex'>
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
