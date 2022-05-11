import firebase from "firebase/compat/app";
import React, {useState} from 'react'
import { db, auth } from '../firebase'

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


  }
  return (
    <div>
      <form onSubmit={SendMessage}>
        <div className='sendMsg'>
          <input placeholder='メッセージを入力して下さい' type="text" onChange={(e) => {
            setMessage(e.target.value);
          }} /> 
        </div>
      </form>
    </div>
  )
}

export default SendMessage