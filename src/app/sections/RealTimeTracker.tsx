import React from 'react';

export default function RealTimeTracker() {
	return (
		<section className='p-16 flex flex-col gap-24 justify-center items-center mb-28 mt-12'>
			<div className='text-center'>
				<p className='text-primary text-2xl mb-4'>Excelência em cada etapa</p>
				<h2 className='text-5xl font-medium mb-10  mx-auto '>
					Definindo o padrão para um serviço excepcional
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
					arcu <br />
					congue velit mollis aliquet in et nisl. Mauris dui nibh, fringilla at{' '}
				</p>
			</div>
			<div className='flex items-center justify-center gap-16'>
				<div className='relative  '>
					<div className='h-[550px] w-[420px] bg-gray-200  rounded-xl'></div>
					<div className='h-[550px] w-[420px] absolute -bottom-12 -left-12 -z-10 rounded-xl bg-primary/30' />
				</div>
				<div>
					<div className='flex gap-3 items-center mb-4'>
						<div className='bg-primary w-12 h-12 rounded-full' />
						<p className='text-2xl font-medium '>Real-Time Tracking</p>
					</div>
					<p className='max-w-[500px] mb-6'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
						arcu congue velit mollis aliquet in et nisl. Mauris dui nibh,
						fringilla at
					</p>
					<div className=' shadow-xl my-4'>
						<input
							placeholder='Your Id'
							className='w-full p-4 px-8 placeholder-slate-600 font-medium  rounded-2xl'
						/>
					</div>
					<div className=' shadow-xl my-4 '>
						<input
							placeholder='Enter your package number'
							className='w-full p-4 px-8 placeholder-slate-600 font-medium  rounded-2xl'
						/>
					</div>
					<button className='bg-primary w-full rounded-xl p-4 px-8'>
						Track My Package
					</button>
				</div>
			</div>
		</section>
	);
}
