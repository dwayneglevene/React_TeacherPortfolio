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
      <img src="https://www.goredforwomen.org/-/media/Images/News/2021/October-2021/1025TIFKnowledgeHouse-Dwayne-Levene.jpg"/>
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

<h1>Curriculum</h1>
      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQSRDYIWJ6FLUnH8rtzuUywxtZthwlCOaA_3jPsgSJ7kO-DhqYlcbCzz8jpYG6qaqvJPfLsJiia_a8s/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="100%"></iframe>

  
    </div>
  </div>



</div>
        </div>
    )

}
export default Layout;