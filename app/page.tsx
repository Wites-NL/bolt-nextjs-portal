export default function Home() {
  return (
    &lt;main className="flex min-h-screen flex-col items-center justify-between p-24"&gt;
      &lt;div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"&gt;
        &lt;p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-100 lg:p-4 lg:dark:bg-zinc-800/30"&gt;
          Get started by editing&nbsp;
          &lt;code className="font-mono font-bold"&gt;app/page.tsx&lt;/code&gt;
        &lt;/p&gt;
        &lt;div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white/0 dark:from-black dark:via-black/0 lg:static lg:h-auto lg:w-auto lg:bg-none"&gt;
          &lt;a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&amp;utm_medium=default-template&amp;utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          &gt;
            By&nbsp;
            &lt;img
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /&gt;
          &lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-bottom-32 after:left-1/2 after:-z-10 after:h-[180px] after:w-[240px] after:-translate-x-1/2 after:bg-gradient-conic after:from-sky-900 after:via-[#0141ff] after:blur-2xl after:content-[''] dark:before:bg-gradient-radial dark:before:from-black dark:after:from-sky-500 dark:after:via-[#22c1ff] lg:static lg:w-auto lg:max-w-full lg:py-0"&gt;
        &lt;img
          src="/next.svg"
          alt="Next.js Logo"
          className="dark:invert"
          width={180}
          height={37}
          priority
        /&gt;
      &lt;/div&gt;

      &lt;div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"&gt;
        &lt;a
          href="https://nextjs.org/docs?utm_source=create-next-app&amp;utm_medium=default-template&amp;utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        &gt;
          &lt;h2 className={`mb-3 text-2xl font-semibold`}&gt;
            Docs &lt;span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"&gt;-&gt;&lt;/span&gt;
          &lt;/h2&gt;
          &lt;p className={`m-0 max-w-[30ch] text-sm opacity-50`}&gt;
            Find in-depth information about Next.js features and&lt;br /&gt;API.
          &lt;/p&gt;
        &lt;/a&gt;

        &lt;a
          href="https://nextjs.org/learn?utm_source=create-next-app&amp;utm_medium=default-template&amp;utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        &gt;
          &lt;h2 className={`mb-3 text-2xl font-semibold`}&gt;
            Learn &lt;span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"&gt;-&gt;&lt;/span&gt;
          &lt;/h2&gt;
          &lt;p className={`m-0 max-w-[30ch] text-sm opacity-50`}&gt;
            Learn about Next.js in an interactive course with&lt;br /&gt;quizzes!
          &lt;/p&gt;
        &lt;/a&gt;

        &lt;a
          href="https://vercel.com/templates?framework=next.js&amp;utm_source=create-next-app&amp;utm_medium=default-template&amp;utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        &gt;
          &lt;h2 className={`mb-3 text-2xl font-semibold`}&gt;
            Templates &lt;span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"&gt;-&gt;&lt;/span&gt;
          &lt;/h2&gt;
          &lt;p className={`m-0 max-w-[30ch] text-sm opacity-50`}&gt;
            Discover and deploy boilerplate example Next.js&lt;br /&gt;projects.
          &lt;/p&gt;
        &lt;/a&gt;

        &lt;a
          href="https://vercel.com/new?utm_source=create-next-app&amp;utm_medium=default-template&amp;utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        &gt;
          &lt;h2 className={`mb-3 text-2xl font-semibold`}&gt;
            Deploy &lt;span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"&gt;-&gt;&lt;/span&gt;
          &lt;/h2&gt;
          &lt;p className={`m-0 max-w-[30ch] text-sm opacity-50`}&gt;
            Instantly deploy your Next.js site to a shareable URL&lt;br /&gt;with Vercel.
          &lt;/p&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/main&gt;
  )
}
