import React from 'react';

export default function MelhoresServicos() {
	return (
		<section className='p-16 flex gap-24 justify-center items-center mb-24'>
			<div>
				<p className='text-primary text-2xl mb-4'>Melhores serviços</p>
				<h2 className='text-5xl font-medium mb-10'>
					Armazenagem e
					<br /> Estocagem
				</h2>
				<div className='mb-6'>
					<div className='flex items-center gap-2 mb-4'>
						<div className='h-6 w-6 bg-primary' />
						<p className='text-2xl font-medium'>Buffer de Inventário</p>
					</div>
					<p className='max-w-[79%]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
						arcu congue velit mollis aliquet in et nisl. mollis aliquet.
					</p>
				</div>
				<div className='mb-6'>
					<div className='flex items-center gap-2 mb-4'>
						<div className='h-6 w-6 bg-primary' />
						<p className='text-2xl font-medium'>Distribuição Eficiente</p>
					</div>
					<p className='max-w-[79%]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
						arcu congue velit mollis aliquet in et nisl. mollis aliquet.
					</p>
				</div>
				<div>
					<div className='flex items-center gap-2 mb-4'>
						<div className='h-6 w-6 bg-primary' />
						<p className='text-2xl font-medium'>Gestão de Riscos</p>
					</div>
					<p className='max-w-[79%]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
						arcu congue velit mollis aliquet in et nisl. mollis aliquet.
					</p>
				</div>
			</div>
			<div className='relative  '>
				<div className='h-[600px] w-[420px] bg-gray-200 '></div>
				<div className='h-[600px] w-[420px] absolute bottom-12 left-12 -z-10 bg-primary/30' />
			</div>
		</section>
	);
}
