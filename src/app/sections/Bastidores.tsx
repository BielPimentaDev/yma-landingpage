import React from 'react';

export default function Bastidores() {
	return (
		<section className='p-16   mb-28 mt-12'>
			<div className='grid grid-cols-4 grid-rows-2 gap-3'>
				<div className='col-span-2'>
					<p className='text-primary text-2xl mb-4'>Our Visual Journey</p>
					<h2 className='text-5xl font-medium mb-10'>
						Nos bastidores da Transporte
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
						porttitor massa lacus, vel tincidunt ante suscipit quis.{' '}
					</p>
				</div>
				<div className='bg-gray-200 rounded-xl w-full h-full' />
				<div className='bg-gray-200 rounded-xl w-full h-full' />
				<div className='bg-gray-200 rounded-xl w-full h-full col-span-2' />
				<div className='bg-gray-200 rounded-xl w-full h-full' />
				<div className='bg-gray-200 rounded-xl w-full h-full' />
			</div>
		</section>
	);
}
