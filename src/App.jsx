// import Result from "./accordian/accordian"
import Faq from "./accordian/Faq"
import Theme from "./Theme/Theme"
import Todolist from "./Todolist/Todolist"
import UseState from  "./Hooks/UseState"
import DataFetch from "./Hooks/UseEffect"
import TextInputFocus  from './Hooks/UseRef'
import FilterlistComponent from "./Hooks/UseMemo"
import ParentCompent from './Hooks/UseCallback'
import UserProvider from "./Context/Usercontext"
import UserInfo from "./Context/UserInfo"
import Alteruserinfo from "./Context/Alteruserinfo"

function App() {


  return (
    <>
      {/* <Result /> */}
      {/* <ThemeProvider> */}
      {/* <ThemeButton /> */}
      {/* </ThemeProvider> */}
      {/* <Theme /> */}
      {/* <Todolist /> */}
      {/* <Faq /> */}
      {/* <UseState /> */}
      {/* <DataFetch /> */}
      {/* < TextInputFocus /> */}
      {/* <FilterlistComponent /> */}
      {/* <ParentCompent /> */}
      <UserProvider>
        <h1> Root Component  </h1>
        <UserInfo />
        <Alteruserinfo />
      </UserProvider>
     
    </>
  )
}

export default App
