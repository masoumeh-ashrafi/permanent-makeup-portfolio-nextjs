'use client'

export default function AboutImage() {
  return (
    <div className='w-48 h-48 md:w-full md:h-64 relative rounded-2xl overflow-hidden shadow-md border-4 border-emerald-50'>
      <img
        src='/optimized/me.webp'
        alt='فاطمه درویشی'
        className='w-full h-full object-cover'
        onError={e => {
          ;(e.target as HTMLImageElement).src =
            'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400'
        }}
      />
    </div>
  )
}
