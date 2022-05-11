import { Input } from "@mui/material";
import firebase from "firebase/compat/app";
import React, {useState} from 'react'
import { db, auth } from '../firebase'
import SendIcon from "@mui/icons-material/Send";

function SendMessage() {
  const [message, setMessage] = useState("");

  function SendMessage(e) {
    // テキストをDBに送りたいだけで、画面をリロードする必要は無いので、
    e.preventDefault(); // デフォルトの機能を止める

    // ログイン中のユーザー情報を取れる
    const {uid, photoURL} = auth.currentUser

    // firebase.firestore.FieldValue.serverTimestamp()
    // 上の処理でEnterを押した際の時間を自動で取得できる
  
    // dbに保存する
    db.collection("message").add({
      text: message,
      photoURL,
      uid,
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
    })

    // 送信後にinputの中身を空にする
    // inputのvalue属性にmessageをつけておくことでリアクティブになる
    setMessage("")
  }
  return (
    <div>
      <form onSubmit={SendMessage}>
        <div className='sendMsg'>
          <Input
              style={{
                width: "78%",
                fontSize: "15px",
                fontWeight: "550",
                marginLeft: "5px",
                marginBottom: "-3px",
              }}
              placeholder="メッセージを入力"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
        </div>
      </form>
    </div>
  )
}

export default SendMessage