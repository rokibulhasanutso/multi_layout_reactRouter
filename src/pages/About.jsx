
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const About = ({navData}) => {

    return (
        <div>
            <p className='text-4xl'>This is About Page.</p>
            <div>
                <nav className='mt-10 py-10 text-xl'>
                    {
                        navData.map((data, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    to={data.url}
                                    className={({ isActive, isPending }) => 
                                        isPending ? 'pending' : isActive ? 'text-blue-500 font-semibold px-4 py-2 border-b-2 border-blue-500' : "px-4 py-2 text-slate-500 border-b"
                                    }
                                >
                                    {data.name}
                                </NavLink>
                            )
                        })
                    }
                </nav>

                <div className='mt-10'>
                    <Outlet/>
                </div>
                
            </div>
        </div>
    );
};

export default About;