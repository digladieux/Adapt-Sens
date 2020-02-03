import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Construction from './component/construction';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Construction} />
      </Switch>
    </Router>
  );
}
export default App;

// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Home from './component/home';
// import NotFound from './component/notFound';
// import Products from './component/products';
// import ContactUs from './component/contactUs';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <ul className="navbar-nav mr-auto">
//             <li><Link to={'/'} className="nav-link"> Home </Link></li>
//             <li><Link to={'/product'} className="nav-link">Nos produits</Link></li>
//             <li><Link to={'/contact-us'} className="nav-link">Contactez-nous</Link></li>
//           </ul>
//         </nav>
//         <hr />
//         <Switch>
//           <Route exact path='/' component={Home} />
//           <Route exact path='/product' component={Products} />
//           <Route exact path='/contact-us' component={ContactUs} />
//           <Route component={NotFound} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }
// export default App;
