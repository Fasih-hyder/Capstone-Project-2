import Homepage from "./pages/home/page.jsx"
import 'bootstrap/dist/css/bootstrap.css'
import Script from 'next/script'




export default function pages () {
  return (
    <>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
    
    <Homepage />
    </> 
     )
}
