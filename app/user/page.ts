import AddUser from "./addUser";
// import UserList from "./userList";

export default async function Home() {
  return (
    <div>
      <AddUser/>
      <br />
      {/* User一覧を表示するコンポーネント */}
      {/* <UserList /> */}
    </div>
  );
}