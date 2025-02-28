'use client';

import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Profile() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [session, router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (!session) {
    return &lt;div&gt;Loading...&lt;/div&gt;;
  }

  return (
    &lt;div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"&gt;
      &lt;div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"&gt;
        &lt;h2 className="text-2xl mb-4"&gt;Profile&lt;/h2&gt;
        &lt;p&gt;Email: {session.user?.email}&lt;/p&gt;
        &lt;button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          onClick={handleSignOut}
        &gt;
          Sign Out
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
