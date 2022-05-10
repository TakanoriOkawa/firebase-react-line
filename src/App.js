import './App.css';
import SignIn from './components/SignIn';
// トップ画面であるApp.jsでコンポーネントの出し分けを行う
// ログインしていれば、Lineコンポーネントを出力する
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "./firebase"
import Line from './components/Line';

function App() {
  // ログインしているかどうかの確認
  const user = useAuthState(auth);
  console.log("ログインしているかどうか", user);

  return (
    <div>
      {user ? <Line />: <SignIn />}
    </div>
  );
}

export default App;
