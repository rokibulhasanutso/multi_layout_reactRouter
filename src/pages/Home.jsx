import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const Home = () => {
    return (
        <div id="homePage">
            <p className='text-4xl'>This is Home Page.</p>
            <div className='py-6 flex'>
                
                <nav className='mt-5 flex flex-col gap-2 h-full border border-gray-300 rounded-lg'>
                    <ul className='w-80 px-6 py-8'>
                        <li className='px-4 py-1.5 mb-4 last:mb-0 text-xl'>
                            <NavLink
                                to='/'
                                className={({ isActive, isPending }) => 
                                    isPending ? 'pending' : isActive ? 'text-red-500 font-semibold' : ""
                                }
                            >
                                Profile
                            </NavLink>
                        </li>
                        <li className='px-4 py-1.5 mb-4 last:mb-0 text-xl'>
                            <NavLink
                                to="/messages"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 font-semibold" : ""
                                }
                            >
                                Messages
                            </NavLink>
                        </li>
                        <li className='px-4 py-1.5 mb-4 last:mb-0 text-xl'>
                            <NavLink
                                to="/category"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 font-semibold" : ""
                                }
                            >
                                Category
                            </NavLink>
                        </li>
                        <li className='px-4 py-1.5 mb-4 last:mb-0 text-xl'>
                            <NavLink
                                to="/userList"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 font-semibold" : ""
                                }
                            >
                                User list
                            </NavLink>
                        </li>
                        <li className='px-4 py-1.5 mb-4 last:mb-0 text-xl'>
                            <NavLink
                                to="/postList"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 font-semibold" : ""
                                }
                            >
                                Post list
                            </NavLink>
                        </li>
                    </ul>
                </nav>


                {/* all content Outlet */}
                <div className='ms-10 px-4 py-6'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Home;