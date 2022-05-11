import React, { useEffect, useState } from 'react'
import SignOut from './SignOut'
import { db } from '../firebase'
import SendMessage from './SendMessage';

function Line() {
  // useStateの初期値は[]にする必要がある、
  // でないと配列にならない。
  const [messages, setMessages] = useState([]);

  // 初回読み込み時のみに１回だけ実行
  useEffect(() => {
    db.collection("message")
    .orderBy("createAt")
    .limit(50)
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()))
    }); // onSnapShotでデータを取ってくるメソッド
  },[])

  // JSXでは{}の中ではjsの関数や変数を使うことができる。
  return (
    <div>
      <SignOut />
      <div className='msgs'>
        {messages.map(({id,text,photoURL,uid}) => (
          <div>
            <div key={id}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  )
}

export default Line