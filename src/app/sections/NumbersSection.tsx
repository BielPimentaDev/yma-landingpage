import React from 'react';

export default function NumbersSection() {
	return (
		<section className='p-16 flex gap-24 justify-center items-center mb-24 bg-primary/10'>
			<div className='flex gap-24'>
				<div className='max-w-80 text-center'>
					<p className='font-semibold text-7xl mb-2'>80M</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
						lectus sit amet.
					</p>
				</div>
				<div className='max-w-80 text-center'>
					<p className='font-semibold text-7xl mb-2 text-primary'>500+</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
						lectus sit amet.
					</p>
				</div>
				<div className='max-w-80 text-center'>
					<p className='font-semibold text-7xl mb-2'>90%</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
						lectus sit amet.
					</p>
				</div>
			</div>
		</section>
	);
}
