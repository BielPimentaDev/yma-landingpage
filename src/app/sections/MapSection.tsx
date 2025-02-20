import React from 'react';

export default function MapSection() {
	return (
		<section className='p-16   flex flex-col gap-24 justify-center text-white bg-primary items-center mb-28 mt-12'>
			<div className='max-w-[1500px] mx-auto'>
				<div className='text-center mb-36'>
					<h2 className='text-[54px] font-medium mb-4'>
						Levando nossos serviços a<br /> todos os cantos do globo
					</h2>
					<p className='text-3xl'>Alcance global, experiência local</p>
				</div>
				<div className='flex justify-between'>
					<div className='max-w-80 '>
						<p className='font-semibold text-[54px] mb-2'>967</p>
						<p className='text-sm'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							et lectus sit amet.
						</p>
					</div>
					<div className='max-w-80 '>
						<p className='font-semibold text-[54px] mb-2'>80%</p>
						<p className='text-sm'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							et lectus sit amet.
						</p>
					</div>
					<div className='max-w-80 '>
						<p className='font-semibold text-[54px] mb-2'>$8B+</p>
						<p className='text-sm'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							et lectus sit amet.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
