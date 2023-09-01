// ** Context
import { GlobalContext } from "@/context/global"

// ** Hooks
import useGlobalHook from "@/hooks/useGlobalHook"

// ** Custom Pages
import HomePage from "./pages/home"


function App() {
  
  const {globalState,setGlobalState} = useGlobalHook()

  return (
    <>
      <GlobalContext.Provider 
        value={{ states : globalState, setStates : setGlobalState }}>
        <HomePage />
      </GlobalContext.Provider>
    </>
  )
}

export default App
