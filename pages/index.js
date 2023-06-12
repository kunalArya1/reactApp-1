
export default function Home() {    // function component 

  //plane javaScript
  // for writing js in jsx we use --> {}
  // we cannot use our variable in reat 
  // we have to use react variable i.e useState
  // useState -> react -> virtual dom -> real dom
  const a = new Date().toLocaleTimeString();

  setInterval(() => {
    
    
  }, 1000);



  return   <h1>{a}</h1>;
  // we return always html 
    
}
