
const UserLists = ({user}) => {

    return (
        <div className="border-s border-slate-500 px-4 py-6 text-lg font-normal h-full">
            <p className="mb-2 last:mb-0">Name : {user.name}</p>
            <p className="mb-2 last:mb-0">Category : {user.category}</p>
            <p className="mb-2 last:mb-0">Age : {user.age}</p>
        </div>
    );
};

export default UserLists;