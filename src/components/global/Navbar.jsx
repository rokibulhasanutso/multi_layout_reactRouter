import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    
        <nav className="border-b mb-10">
            <div className="container max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5">
                    <div>
                        {/* logo image */}
                        <h2 className="text-slate-500 text-5xl font-semibold">logo</h2>
                    </div>

                    <div>
                        <ul className="flex gap-4 text-lg text-slate-500 font-medium">
                            <Link to="/" className="hover:text-indigo-500 hover:underline">Home</Link>
                            <Link to="/about" className="hover:text-indigo-500 hover:underline">About</Link>
                            <Link to="/contact" className="hover:text-indigo-500 hover:underline">Contact</Link>
                            <Link to="/blog" className="hover:text-indigo-500 hover:underline">Blog</Link>
                            <Link to="/faq" className="hover:text-indigo-500 hover:underline">FAQ</Link>
                        </ul>
                    </div>
                    
                    <div className="flex gap-4">
                        <Link to="login" role="button" className="text-slate-500 text-xl font-medium border rounded-md px-4 py-1 -mt-0.5 pb-1.5 bg-slate-100 hover:bg-white hover:border-indigo-500 hover:text-indigo-500 transition">Login</Link>
                        <Link to="registration" role="button" className="text-slate-500 text-xl font-medium border rounded-md px-4 py-1 -mt-0.5 pb-1.5 bg-slate-100 hover:bg-white hover:border-indigo-500 hover:text-indigo-500 transition">Sign In</Link>
                    </div>
                </div>
            </div>
        </nav>
    
    );
};

export default Navbar;