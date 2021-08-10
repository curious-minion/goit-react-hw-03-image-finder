
import { loader, one, two, three } from './Loader.module.css';

const Loader = () => {
    return (
       <div class={loader}>
    <div class={one}></div>
    <div class={two}></div>
    <div class={three}></div>
    </div>
    );
};




export default Loader;
