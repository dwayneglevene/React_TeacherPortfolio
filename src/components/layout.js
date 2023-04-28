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
      <img src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/341000935_1678030082634697_4083074487114717355_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=kTXlOJTqvBsAX-YTIO9&_nc_ht=scontent-lga3-2.xx&oh=00_AfAIEARPE9lxVheuzyEiW1bEENOk0ZbGHNnlRqJa06MUdw&oe=6450CE44"/>
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

      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQSRDYIWJ6FLUnH8rtzuUywxtZthwlCOaA_3jPsgSJ7kO-DhqYlcbCzz8jpYG6qaqvJPfLsJiia_a8s/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="100%"></iframe>

  
    </div>
  </div>



</div>
        </div>
    )

}
export default Layout;