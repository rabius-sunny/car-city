export default function Cta({ title }: { title: string }) {
  return (
    <div className='flex flex-col items-center justify-between gap-8 rounded-lg bg-sky-500 px-4 py-10 md:flex-row'>
      <h2 className='flex-1 text-center text-lg font-medium text-white md:text-start md:text-2xl'>
        {title}
      </h2>
      <button className='btn w-full bg-white text-sky-500 md:w-auto'>
        join now
      </button>
    </div>
  )
}
