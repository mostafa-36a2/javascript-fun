document.addEventListener("mousemove", (event)=>{
	if(!event.target.hasChildNodes()){
		event.target.style.position="absolute";
		for(let t=0;t<1000;t++){
			setTimeout(()=>{
			    c = Math.cos(t*3.14*0.01)
			    s =  Math.sin(t*3.14*0.01)
			    a = 100;
			    if(!event.target.hasChildNodes()){
				    //https://mathworld.wolfram.com/Cardioid.html
				    event.target.style.top=250+a*c+a*c*c+"px";
				    event.target.style.left=250+a*s+a*s*s+"px";
			    }
			}, t*20); 
		}
	}else{
		event.target.style.color="red";
	}

})
