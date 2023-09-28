
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const UserList = ({navData}) => {

    
    return (
        <div>
            <p className='text-4xl'>This is UserList</p>
            <p className="my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vel officiis veniam, voluptate ex sequi, ullam quisquam maiores optio tempora nisi adipisci ea hic quia. Eum, quasi! Eaque, inventore dignissimos.</p>

            <div className='flex mt-10 border border-slate-400 rounded-md'>
                <div className="flex flex-col gap-4 px-4 py-6 w-60">
                    {navData.map(data => {
                        return (
                            <NavLink
                                key={data.id}
                                to={data.id.toString()}
                                className={({isActive , isPending}) => {
                                    return isPending ? 'pending' : isActive ? 'text-red-500 font-semibold' : ''
                                }}
                            >
                                <span className='text-xl font-normal'>{data.name}</span>
                                
                            </NavLink>
                        )
                    })}
                </div>

                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default UserList;