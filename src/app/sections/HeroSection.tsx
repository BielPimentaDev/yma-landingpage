import React from 'react';

export default function HeroSection() {
	return (
		<section className='bg-black  p-16 h-[80vh] '>
			<nav className='flex items-center gap-36 justify-center  '>
				<h1 className='text-white'>YMA</h1>
				<ul className='text-white flex gap-12'>
					<li>Quem somos</li>
					<li>Quem somos</li>
					<li>Quem somos</li>
					<li>Quem somos</li>
				</ul>
				<button className='bg-primary p-3 px-7 rounded-2xl font-semibold'>
					Entrar
				</button>
			</nav>
			<h1 className='font-extrabold text-6xl text-white text-center  my-40'>
				<span className='text-primary'>A MAIOR</span> <br />
				REDIRECIONADORA
				<br /> SÃO PAULO-ACRE
			</h1>
		</section>
	);
}
