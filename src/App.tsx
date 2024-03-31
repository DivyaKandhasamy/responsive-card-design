
import './App.css';
import img from './images/image-product-desktop.jpg';
import icon from './images/icon-cart.svg';

function App() {
  return (
    <div className="card-container">
      <div className="card">
         <div className='card-left'>
            <img src={img} alt='product-img' className='img1'/>
         </div>
         <div className="card-right">
          <p className='text-1'>PERFUME</p>
          <p className='text-2'>Gabrielle Essence Eau De Perfume</p>
          <div className="text-3">A floral,solar and voluptuous interpretation composed by Olivier Polge,Perfumer-Creator for the House of CHANEL.</div>
          <div className='text-div'>
            <p className='text-4'>$149.99</p>
            <span className='span1'>$169.99</span>
          </div>
          <button>
            <img src={icon} alt='cart' className='icon'/>
            <span>Add to cart</span>
          </button>
         </div>
      </div>
    </div>
  );
}

export default App;
