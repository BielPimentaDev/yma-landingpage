import React from 'react';

export default function Footer() {
	return (
		<section className='p-16  mb-24 flex gap-32'>
			<div className='flex flex-col gap-6'>
				<div className='flex gap-4'>
					<div className='w-6 h-6 bg-black' />
					<p>1234 Elm Street, Suite 500, Metropolis,USA</p>
				</div>
				<div className='flex gap-4'>
					<div className='w-6 h-6 bg-black' />
					<p>(555) 123-4567</p>
				</div>
			</div>
			<ul>
				<li>About Us</li>
				<li>Packages</li>
				<li>Services</li>
				<li>Contact Us</li>
				<li>Statics</li>
				<li>Our Office</li>
				<li>Testimonials</li>
				<li>Pricing</li>
				<li>How It’s Work</li>
			</ul>
			<ul>
				<li>Packages</li>
				<li>Contact Us</li>
				<li>Our Office</li>
				<li>Pricing</li>
			</ul>
			<div className=''>
				<div className='flex gap-6 mb-4'>
					<div className='w-6 h-6 bg-primary' />
					<div className='w-6 h-6 bg-primary' />
					<div className='w-6 h-6 bg-primary' />
					<div className='w-6 h-6 bg-primary' />
				</div>
				<p>2024 Transpo Inc. All rights reserved.</p>
				<p>Transpo is a registered trademark of Transpo Inc.</p>
			</div>
		</section>
	);
}
