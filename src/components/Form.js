// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function Form() {
//     // const [gender, setGender]= useState()
//     // const [name, setName]= useState('Sunny')
//     const [age, setAge] = useState(false)
//     const [cat, setCat]= useState([])

// const handleClick = (e) => {
//   e.preventDefault();
//   setAge(age + 1);
// }

// useEffect(() => {
//   axios.get('https://jsonplaceholder.typicode.com/photos')
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => { 
//     console.log(error);
//   console.log('Pictures')
// },[])


//   return (
//     <div>
//         <div className="container">
//             <form>
//                 <input type="text" placeholder='enter name' /> 
//                 <input type="email" placeholder='enter email' />
//                 {/* <input type="number" placeholder='enter age' /> */}
//                 <p>{age}</p> 
//                 <button onClick={handleClick}>Change age</button>
//                 <input type="tel" placeholder=' enter mobile number' />
//                 <img src='' alt='picture'></img>
//                 <button>Change picture</button>
//                 <input type="radio" value='Female' />  Female
//                 <input type="radio" value='Male' /> Male
//                 <button>Change name</button>
                
//             </form>
//         </div>
//     </div>
//   )
// }

// ,export default Form ;