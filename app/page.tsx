"use client"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
export default function Page() {
    return<><CountButton incrementBy={1}/><hr/>
    <CountButton incrementBy={2}/>
    <a href="https://github.com/JonathanNeuman/Nextjs">My GitHub Repo</a>
    <SearchBar/>
    </> 
    
  }