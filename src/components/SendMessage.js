import React from 'react'
import React, {useState} from 'react'
import { db } from '../firebase'

function SendMessage() {
  const [message, setMessage] = useState("");

  function SendMessage(e) {
    // テキストをDBに送りたいだけで、画面をリロードする必要は無いので、
    e.preventDefault(); // デフォルトの機能を止める

    // dbに保存する
    db.collection("message").add({
      text: message,
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