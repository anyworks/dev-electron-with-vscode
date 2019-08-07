var TK = {};
TK["stack"] = undefined;

TK.addScriptTag = function (src) {
    var script = document.createElement('script');
    script.src = src;
    script.type = "text/javascript";
    script.onload  = function(e){
        alert("script was onloaded");
        var next = this.stack.shift();
        if(next)
            TK.addScriptTag(script);
        else
        this.stack == unidefined;
    };
    
    if(this.stack === undefined)
    {
        this.stack = [];
        
        document.head.appendChild(script);
        alert("2")
    }else{
        this.stack.push(src);
    }
};

TK.addStyleTag = function (src) {
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = src;
    document.head.appendChild(link);
};
TK.addStyle = function (src) {
    var link = document.createElement('style');
    link.type = "text/css";
    link.innerHTML = src;
    document.head.appendChild(link);
};
TK.waitForSelector = async function (selector) {
    return new Promise((resolve, reject) => {
        let retry = 5;
        var tryToResolve = () => {
            let res = document.querySelector(selector);
            if (res) return resolve(res);
            retry--;
            if (!retry) return reject("timed out : " + selector);
            setTimeout(tryToResolve, 500);
        };
        tryToResolve();
    });
};
TK.use = {
    d3: async () => {
        TK.addScriptTag("https://d3js.org/d3.v5.min.js");
    },
    d3sel: async () => { TK.addScriptTag("https://d3js.org/d3-selection.v1.min.js") },
    icons: async () => { TK.addStyleTag("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css") },
    react: async () => {
        TK.addScriptTag("https://unpkg.com/react@16/umd/react.development.js");
        TK.addScriptTag("https://unpkg.com/react-dom@16/umd/react-dom.development.js");
    },
    reset: async () => {
        TK.addStyleTag("https://cdn.jsdelivr.net/npm/ress@1.2.2/ress.css")
    },
    all: async (names) => {
        names.forEach((n) => { try { TK.use[n].apply(TK) } catch (err) { alert(`The specified name is not defined. "${n}"`, "warning") } });
    }
};
console.log('preloaded');

var elecGlobals = {};
var elec = require("electron");
elecGlobals["ipcRenderer"] = elec.ipcRenderer;


window = window | {};
window.TK = TK;
window.electron = elecGlobals;