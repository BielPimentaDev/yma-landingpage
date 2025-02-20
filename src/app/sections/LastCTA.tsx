import React from 'react';

export default function LastCTA() {
	return (
		<section className='p-16 flex gap-24 flex-col justify-center items-center mb-12 bg-zinc-900 py-48'>
			<div className='text-center text-white'>
				<p className='text-3xl mb-4'>Vamos avançar juntos</p>
				<h2 className='font-semibold text-7xl'>
					Seu parceiro em logística, aguardando sua ligação
				</h2>
			</div>
			<button className='bg-primary py-4 px-8 rounded-xl'>
				Get Started Now
			</button>
		</section>
	);
}
