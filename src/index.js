import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const nama = "Anti";

function Welcome(props){
  return(
    <div>
      <h1>Selamat datang {props.nama}</h1>
    </div>
  );
}

function Home(){
      if (nama === ""){
        return <button>Login</button>;
      }
      else{
        return <Welcome nama = {nama}/>;
      }
}

root.render(<Home />);