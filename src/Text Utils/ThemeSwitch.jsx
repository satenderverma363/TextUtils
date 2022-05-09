import React from 'react'

// const toggleMode = ()=>{
//   if(mode==='light'){
//       setMode('dark')
//       document.body.style.backgroundColor = 'black';
//       showAlert("Dark Mode Enabled", "success");
//   }else{
//     setMode('light')
//     document.body.style.backgroundColor = 'white';
//     showAlert("Light Mode Enabled", "success");
//   }
// }

  function ThemeSwitch() {
    return (
    <>
      
      <div className="form-check form-switch">
        <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Blue Theme Mode</label>
      </div>
      
    </>
  )
    }



export default ThemeSwitch
