(function(w){

var style = `
*{
  background-color : silver;
}

`;
//awsome 	//SOLID:900 REGULAR:400 LIGHT:300 BRANDS:400
function app(){

function MainFrame(){
  return (
  <div className="grid">
    <nav id="grid1" className="tree">
      <span className="fas fa-home tree">Home</span>
    </nav>
    <p><b>D3 version</b> : {d3.version}</p>
    <p><b>React version</b> : {React.version}</p>
  </div>
  );
}


ReactDOM.render(<MainFrame />, document.querySelector('#content'));

}

w.addEventLister("DOMContentLoaded",function(e){

});

})(window);