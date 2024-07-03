import { Route, Routes } from "react-router-dom"
import Profile from "./components/Profile"
import Chat from "./components/Chat"

function App() {

    return (
        <div className="overflow-x-hidden box-border bg-gray-200 relative">
            <Routes>
                <Route path="/" element={<Profile/>} />
                <Route path="/chat" element={<Chat/>} />
            </Routes>
        </div>
    )
}

export default App
