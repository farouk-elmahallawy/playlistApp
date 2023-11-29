import 'bootstrap/dist/css/bootstrap.css';

function PlayListContainer(props) {
  return (
    <div className="bg-dark text-white col-md-10 col-sm-12">
     {props.children}
    </div>
  );
}

export default PlayListContainer;