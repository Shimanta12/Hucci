import useAuth from "./../hooks/useAuth";
import placeholder from "./../assets/images/placeholder.jpg";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-3xl text-customSecondary text-center font-bold">
        Welcome
      </h1>
      <div className="h-screen text-xl text-customSecondary font-bold flex flex-col md:flex-row justify-center  items-center gap-4">
        <img className="h-56" src={user.photoURL || placeholder} alt="" />
        <div>
          <h2>Name: {user.displayName || "Mr. x"}</h2>
          <h2>Email: {user.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
