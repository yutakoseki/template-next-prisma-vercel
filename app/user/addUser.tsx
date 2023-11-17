// input タグのonChangeを使うためにClient Componentにする
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddUser() {
    const router = useRouter();

    const [id, setId] = useState("");
    const [name, setName] = useState("");

    // Userテーブルへデータを書き込む
    const fetchAsyncAddUser = async () => {
        // 入力されていないものがあれば、登録しない
        if (id == "" || name == "") {
            alert("すべての項目を埋めてください");
            return;
        }

        // APIのURL
        const url = "http://localhost:3001/api/user";
        // リクエストパラメータ
        const params = {
            method: "POST",
            // JSON形式のデータのヘッダー
            headers: {
                "Content-Type": "application/json",
            },
            // リクエストボディ
            body: JSON.stringify({
                id: id,
                name: name,
            }),
        };

        // APIへのリクエスト
        await fetch(url, params);

        // 入力値を初期化
        setId("");
        setName("");

        // 画面をリフレッシュ
        router.refresh();
    };

    // inputタグのvalueに変化があった際に実行される
    const changeIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };
    // inputタグのvalueに変化があった際に実行される
    const changeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <div>
            <h2>Add User</h2>
            <div>
                <div>
                    <label>Id:</label>
                    <input type="text" name="id" value={id} onChange={changeIdInput} />
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={name} onChange={changeNameInput} />
                </div>
                <div>
                    <button onClick={fetchAsyncAddUser}>追加</button>
                </div>
            </div>
        </div>
    );
}