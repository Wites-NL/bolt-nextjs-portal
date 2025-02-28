'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const supabase = useSupabaseClient();
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push('/profile');
    }
  };

  const handleOAuthLogin = async (provider: 'google' | 'github') => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
    });

    if (error) {
      alert(error.message);
    }
  };

  return (
    &lt;div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"&gt;
      &lt;div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"&gt;
        &lt;h2 className="text-2xl mb-4"&gt;Login&lt;/h2&gt;
        &lt;div className="mb-4"&gt;
          &lt;label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"&gt;
            Email
          &lt;/label&gt;
          &lt;input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /&gt;
        &lt;/div&gt;
        &lt;div className="mb-6"&gt;
          &lt;label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password"&gt;
            Password
          &lt;/label&gt;
          &lt;input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /&gt;
        &lt;/div&gt;
        &lt;div className="flex items-center justify-between"&gt;
          &lt;button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          &gt;
            Sign In
          &lt;/button&gt;
          &lt;a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#"&gt;
            Forgot Password?
          &lt;/a&gt;
        &lt;/div&gt;
        &lt;div className="mt-4"&gt;
          &lt;button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => handleOAuthLogin('google')}
          &gt;
            Sign In with Google
          &lt;/button&gt;
        &lt;/div&gt;
        &lt;div className="mt-2"&gt;
          &lt;button
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => handleOAuthLogin('github')}
          &gt;
            Sign In with GitHub
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
