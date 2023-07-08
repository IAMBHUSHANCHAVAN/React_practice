
// import './App.css';
// import Count1 from './components/Count';
// import Useeffectsgt from './components/Useeffects';
// import Ref from './USerefex';
import AdditionalContentExample from './bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import TypesExample from './bootstrap/exapmle';
import Component1 from './usecontext/Example';
import BasicExample from './bootstrap/dropdown';
import ShapeExample from './bootstrap/image';
// import Useeffects from './components/Useeffects';
// import Count from './components/Count';
function App() {
  return (
    <div className="App">
      {/* <Count1/>
    <Useeffectsgt/> */}
      {/* <Component1/> */}
      {/* <Ref/> */}
      <TypesExample name="dark" property="dark" />
      <TypesExample name="primary" property="primary" />
      <AdditionalContentExample property="danger" desc="dangerr somwthing went wrong" head="danger" />
      <AdditionalContentExample property="success" desc="its a success" head="success" />
      <BasicExample link1="link1" link3="link2" link2="link3" title="abt me" />
      <ShapeExample link="https://www.adobe.com/express/feature/image/media_1550ae4b6b833fe15ea2dd8b8676fac17869ac364.png?width=2000&format=webply&optimize=medium" />
    </div>
  );
}

export default App;
