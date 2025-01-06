const UserName = ({ firstName }) => {
  return <div>{firstName && <h1>Welcome back : {firstName}</h1>}</div>;
};

export default UserName;
