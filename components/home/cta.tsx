export default function Cta({ title }: { title: string }) {
  return (
    <div className='bg-primary flex flex-col items-center justify-between gap-8 rounded-lg px-4 py-10 md:flex-row'>
      <h2 className='flex-1 text-center text-lg font-medium text-white md:text-start md:text-2xl'>
        {title}
      </h2>
      <button className='btn text-primary w-full bg-white md:w-auto'>
        join now
      </button>
    </div>
  )
}
