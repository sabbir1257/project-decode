import React from 'react';
import img from '../../assets/your-idea-img.png'
const YourIdeaIntoReality = () => {
    return (
        <main className=' md:pl-[250px] p-4'>
            <section>
                <div>
                    <h1 className='mb-4 text-5xl font-bold'>Your idea into <span className='text-[#60E1CB]'>reality</span></h1>
                    <p className='md:w-[50%]'>We start every web development project with a project manager from daCode interviewing you about the goal with the project. This is for us to be able to come up with a solution for your SaaS business, estimate a timeline, and come up with a budget.</p>
                </div>
            </section>
            <section>
                <div className='mt-12 md:flex'>
                    <div>
                        <div className='gap-8 md:flex'>
                            <div>
                                <p className='w-20 h-20  grid items-center text-center rounded-full text-[#7BC0E3] bg-[#fff] drop-shadow-2xl text-4xl'>1</p>
                            </div>
                            <div className='mt-5'>
                                <h2 className='text-[#60E1CB] text-2xl font-bold'>Your Idea</h2>
                                <p className='md:w-[60%] my-4'>In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.</p>
                            </div>
                        </div>
                        <div className='gap-8 md:flex'>
                            <div>
                                <p className='w-20 h-20  grid items-center text-center rounded-full text-[#7BC0E3] bg-[#fff] drop-shadow-2xl text-4xl'>2</p>
                            </div>
                            <div className='mt-5'>
                                <h2 className='text-[#60E1CB] text-2xl font-bold'>Strategy meeting</h2>
                                <p className='md:w-[60%] my-4'>This meeting will be a meeting where we together go over our proposed strategy on how we can reach your website goals. Here we will establish a project update system where you will be able to follow the whole process from start to finish.</p>
                            </div>
                        </div>
                        <div className='gap-8 md:flex'>
                            <div>
                                <p className='w-20 h-20  grid items-center text-center rounded-full text-[#7BC0E3] bg-[#fff] drop-shadow-2xl text-4xl'>3</p>
                            </div>
                            <div className='mt-5'>
                                <h2 className='text-[#60E1CB] text-2xl font-bold'>Agile and Scrum framework</h2>
                                <p className='md:w-[60%] my-4'>In this step we will have a team meeting with the project manager and the lead developer and designer. Then we will be working using and agile and scrum framework in order to make sure to deliver your project on time and within budget.</p>
                            </div>
                        </div>
                        <div className='gap-8 md:flex'>
                            <div>
                                <p className='w-20 h-20  grid items-center text-center rounded-full text-[#7BC0E3] bg-[#fff] drop-shadow-2xl text-4xl'>4</p>
                            </div>
                            <div className='mt-5'>
                                <h2 className='text-[#60E1CB] text-2xl font-bold'>Your website goes live</h2>
                                <p className='md:w-[60%] my-4'>The final checks of the website will happen, we will make sure that all tracking pixels, links and user interface is compatible with all different devices. We will also perform a few different tests to make sure that the website is optimised for user experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className='-mb-24 '>
                        <img className='w-full h-full' src={img} alt="" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default YourIdeaIntoReality;