import React from 'react';

export default function NossosServicos() {
	return (
		<section className='p-16 flex gap-24 justify-center items-center mb-24 '>
			<div className='text-center'>
				<p className='text-primary text-2xl mb-4'>Nossos serviços</p>
				<h2 className='text-5xl font-medium mb-10 lg:w-2/3 mx-auto'>
					Serviços Logísticos Adaptados às Suas Necessidades
				</h2>
				<div className='flex gap-12'>
					<div className='w-96 flex flex-col  items-center rounded-xl  shadow-xl px-8 py-12'>
						<div className='w-12 h-12 bg-primary' />
						<p className='text-2xl font-medium text-primary mt-4 mb-2'>
							Transporte de Cargas
						</p>
						<p className=''>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							et lectus sit amet
						</p>
					</div>
					<div className='bg-primary max-w-96 flex flex-col items-center rounded-xl  shadow-xl px-8 py-12'>
						<div className='w-12 h-12 bg-black' />
						<p className='text-2xl font-medium text-black mt-4 mb-2'>
							Armazenagem e Estocagem
						</p>
						<p className=''>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							et lectus sit amet
						</p>
					</div>
					<div className='w-96 flex flex-col  items-center rounded-xl  shadow-xl px-8 py-12'>
						<div className='w-12 h-12 bg-primary' />
						<p className='text-2xl font-medium text-primary mt-4 mb-2'>
							Serviços de Distribuição
						</p>
						<p className=''>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							et lectus sit amet
						</p>
					</div>
				</div>
				<div className='flex gap-12 items-center justify-center mt-10'>
					<div className='w-96 flex flex-col  items-center rounded-xl  shadow-xl px-8 py-12'>
						<div className='w-12 h-12 bg-primary' />
						<p className='text-2xl font-medium text-primary mt-4 mb-2'>
							Gestão de Suprimentos
						</p>
						<p className=''>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							et lectus sit amet
						</p>
					</div>
					<div className='w-96 flex flex-col  items-center rounded-xl  shadow-xl px-8 py-12'>
						<div className='w-12 h-12 bg-primary' />
						<p className='text-2xl font-medium text-primary mt-4 mb-2'>
							Logística Reversa
						</p>
						<p className=''>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							et lectus sit amet
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
