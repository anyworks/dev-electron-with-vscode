(function (window) {
    var style = `
    *{
      background-color : silver;
    }

   `;
    //awsome 	//SOLID:900 REGULAR:400 LIGHT:300 BRANDS:400
    function app() {
        function MainFrame() {
            return (React.createElement("div", { className: "grid" },
                React.createElement("nav", { id: "grid1", className: "tree" },
                    React.createElement("span", { className: "fas fa-home tree" }, "Home")),
                React.createElement("p", null,
                    React.createElement("b", null, "D3 version"),
                    " : ",
                    d3.version),
                React.createElement("p", null,
                    React.createElement("b", null, "React version"),
                    " : ",
                    React.version)));
        }
        ReactDOM.render(React.createElement(MainFrame, null), document.querySelector('#content'));
    }
    window.addEventListener("DOMContentLoaded", () => {
        window.TK.use.all(["d3", "icons", "react", "reset"]);
        window.TK.addStyle(style);
    });
    window.addEventListener("load", app);
})(window);
