import React from 'react';

export default function QuemSomos() {
	return (
		<section className='p-16 flex gap-24 justify-center items-center mb-28 mt-12'>
			<div>
				<p className='text-primary text-2xl mb-4'>Quem somos</p>
				<h2 className='text-5xl font-medium mb-10'>
					Conheça-nos: Nosso Compromisso e Expertise
				</h2>
				<div className='mb-6'>
					<div className='flex items-center gap-2 mb-4'>
						<div className='h-6 w-6 bg-primary' />
						<p className='text-2xl font-medium'>
							Entregas Confiáveis e Pontuais
						</p>
					</div>
					<p className='max-w-[79%]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
						arcu congue velit mollis aliquet in et nisl. mollis aliquet.
					</p>
				</div>
				<div>
					<div className='flex items-center gap-2 mb-4'>
						<div className='h-6 w-6 bg-primary' />
						<p className='text-2xl font-medium'>Quem Conhece, Entrega Melhor</p>
					</div>
					<p className='max-w-[79%]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
						arcu congue velit mollis aliquet in et nisl. mollis aliquet.
					</p>
				</div>
			</div>
			<div className='relative  '>
				<div className='h-[550px] w-[420px] bg-gray-200  rounded-xl'></div>
				<div className='h-[550px] w-[420px] absolute -bottom-12 -left-12 -z-10 rounded-xl bg-primary/30' />
			</div>
		</section>
	);
}
