import About from './aboutcontent';

import Lessons from '../pages/lessons';
import Projects from '../pages/projects';
import {useNavigate} from 'react-router-dom';




function Layout(){
  let navigate = useNavigate();

    return(
        <div class="woo">
            <div class="container">
  
  <div class ="row">
    <div class = "col-6">
      <img src="./images/prDL.JPG"></img>
    </div>
    <div class = "col-6">
    <About />

      </div>
      </div>

      <div class="row">
    <div class="col -12">

    <button onClick ={() =>{
      navigate('/lessons');
    }} type="button" class="btn btn-primary btn-lg">
      Lessons</button>

    
  
    </div>
  </div>

 <div class="row">
    <div class="col -12">

    <button onClick ={() =>{
      navigate('/projects');
    }} type="button" class="btn btn-primary btn-lg">
      Projects</button>

    
  
    </div>
  </div> 

</div>
        </div>
    )

}
export default Layout;