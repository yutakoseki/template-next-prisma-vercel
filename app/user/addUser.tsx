// input タグのonChangeを使うためにClient Componentにする
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddUser() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    // Userテーブルへデータを書き込む
    const fetchAsyncAddUser = async () => {
        // 入力されていないものがあれば、登録しない
        if (name == "" || password == "") {
            return;
        }

        // APIのURL
        const url = "https://next-prisma-vercel-app.vercel.app/api/user";
        // リクエストパラメータ
        const params = {
            method: "POST",
            // JSON形式のデータのヘッダー
            headers: {
                "Content-Type": "application/json",
            },
            // リクエストボディ
            body: JSON.stringify({
                name: name,
            }),
        };

        // APIへのリクエスト
        await fetch(url, params);

        // 入力値を初期化
        setName("");
        setPassword("");

        // 画面をリフレッシュ
        router.refresh();
    };

    // inputタグのvalueに変化があった際に実行される
    const changeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const changePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <h2>Add User</h2>
            <div>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={name} onChange={changeNameInput} />
                </div>
                <div>
                    <label>password:</label>
                    <input type="text" name="password" value={password} onChange={changePasswordInput} />
                </div>
                <div>
                    <button onClick={fetchAsyncAddUser}>追加</button>
                </div>
            </div>
        </div>
    );
}