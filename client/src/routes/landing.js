import { Link } from "react-router-dom"
import styled from "styled-components"

const LandingPage = () =>{
  
   return( 
   <BodyPage>
    
    <Link to='/home'  >
     <Button>Every dog has it's day! Welcome!</Button>
    </Link>
    </BodyPage>
)
}

const BodyPage = styled.div`
  background-image: url("https://www.campbellrivervet.com/wp-content/uploads/sites/282/2022/05/Husky-1000x650.jpg");
  background-repeat: no-repeat; 
  background-attachment: fixed;
  background-position: center center
  height: 1800px;
  background-size: cover

 

  

`
const Button = styled.button `
 position: absolute;
 top: 500px;
 left: 400px;
 height: 100px;
 width: 30%;
 
  padding: 1.3em 3em;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
&:hover {
   
  background-color: #23c483;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
   }

`;


  
  


export default LandingPage