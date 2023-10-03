export const getData = () => {
    return fetch('http://localhost:3000/data').then(res => res.json())
  }
  
  
  
  
  
      
  export default getData;