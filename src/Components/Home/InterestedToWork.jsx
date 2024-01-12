import React from 'react';
import { Link } from 'react-router-dom';

const InterestedToWork = () => {
    return (
        <main>
            <section>
                <div className='bg-[#60E1CB] mb-3'>
                    <h3>Interested to work with us ?</h3>
                    <p>Send a line here get and update daily</p>
                    <button><Link to="/">DaCode@example.com</Link></button>
                </div>
            </section>
        </main>
    );
};

export default InterestedToWork;