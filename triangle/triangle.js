var triangle = {
    isEquilateral : function(a,b,c) {
			if(a+b<c) return false ; 
			if(a+c<b) return false ;
			if(b+c<a) return false ;

    	    if(a!=b) return false ; 
    	    if(b!=c) return false ;
    	    if(a<=0) return false ;
    		return true ;
    },
    isIsosceles : function(a,b,c) {
			if(a+b<c) return false ; 
			if(a+c<b) return false ;
			if(b+c<a) return false ;

			if(a!=b){
				if(b!=c) {
					if(a!=c) return false ;
				}
			}

			if(a<=0){
				if(b<=0){
					if(c<=0) return false ;
				}
			}
    	    return true ;
    },
	isScalene : function(a,b,c) {
			if(a+b<c) return false ; 
			if(a+c<b) return false ;
			if(b+c<a) return false ;

			if(a<=0){
				if(b<=0){
					if(c<=0) return false ;
				}
			}
			return true ;
	}
};