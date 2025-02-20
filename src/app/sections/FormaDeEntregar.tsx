import React from 'react';

export default function FormaDeEntregar() {
	return (
		<section className='p-16 gap-24 mb-24 '>
			<div className=''>
				<div className='text-center mb-24'>
					<p className='text-primary text-2xl mb-4'>Nossa Forma de Entregar</p>
					<h2 className='text-5xl font-medium mb-10 lg:w-2/3 mx-auto'>
						Nosso Processo Simplificado para Entrega Segura de Seus Pacotes
					</h2>
				</div>
				<div className='flex items-center gap-32 justify-center'>
					<div className='text-primary flex flex-col items-center justify-center'>
						<div className='w-12 h-12 rounded-full bg-primary'></div>
						<p className='text-2xl fonte-medium mb-2 mt-2'>
							1. Transporte de Cargas
						</p>
						<p className='max-w-80'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							et lectus sit amet metus semper pharetra eu quis ex.{' '}
						</p>
					</div>
					<div className='text-black flex flex-col items-center justify-center'>
						<div className='w-12 h-12 rounded-full bg-black'></div>
						<p className='text-2xl fonte-medium mb-2 mt-2'>
							2. Rastreio de cargas
						</p>
						<p className='max-w-80'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							et lectus sit amet metus semper pharetra eu quis ex.{' '}
						</p>
					</div>
					<div className='text-black flex flex-col items-center justify-center'>
						<div className='w-12 h-12 rounded-full bg-black'></div>
						<p className='text-2xl fonte-medium mb-2 mt-2'>3. Entrega</p>
						<p className='max-w-80'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							et lectus sit amet metus semper pharetra eu quis ex.{' '}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
