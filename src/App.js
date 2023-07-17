// import logo from './logo.svg';
import './App.css';

function App() {

const products =[
  { name :'mobile', price:150000},
  { name :"laptop", price:90000},
  { name :"watch", price:3000},
  { name :"shoe", price:1000},
];
  return (
    <div className="App">
      {
        products.map(product=><Product name={product.name} price={product.price}></Product>)
      }
     {/* <Product name= "mobile" price= "150000"></Product>
     <Product name= "laptop" price= "90000"></Product>
     <Product name= "watch" price= "3000"></Product>
     <Product name= "shoe" price= "1000"></Product> */}
    </div>
  );
}
function Product(props){
  return(
      <div className="product">
<h1>name:{props.name}</h1>
<p>price:{props.price}</p>
  </div>);
}

export default App;
