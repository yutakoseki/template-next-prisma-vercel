export default async function UserList() {
    // APIのURL
    const url = "https://next-prisma-vercel-app.vercel.app/api/user";

    // APIへリクエスト
    const res = await fetch(url, {
        cache: "no-store",
    });
    // レスポンスボディを取り出す
    const data = await res.json();

    return (
        <div>
            <h2>All Users</h2>
            <br/>
            {data.map((user: any, index: any) => (
                <div key={index}>
                    <div>Id: {user.id}</div>
                    <div>Name: {user.name}</div><br/>
                    {/* {user.posts.map((value: any) => `${value.title},`)} Profile:
                    {user.profile?.bio} */}
                </div>
            ))}
        </div>
    );
}