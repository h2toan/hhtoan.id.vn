export default function WorkMilestone() {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <img
          alt=""
          loading="lazy"
          width="32"
          height="32"
          decoding="async"
          data-nimg="1"
          className="h-7 w-7"
          src="/_next/static/media/planetaria.ecd81ade.svg"
        ></img>
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Planetaria
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">CEO</dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
          <time dateTime="2019">2019</time> <span aria-hidden="true">—</span>{" "}
          <time dateTime="2023">Present</time>
        </dd>
      </dl>
    </li>
  );
}
