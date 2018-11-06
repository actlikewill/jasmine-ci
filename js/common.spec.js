describe("common.js", function() {
    
    it("getDomain() returns a valid domain", function() {        
        let domain = getDomain();
        //TODO : validate the string usin Regex before running
        expect(domain).toBeString();
    });
    
    it("getCookie function returns cookie", function () {
        document.cookie = `user=wilson;path=/`
        let cookie = getCookie("user");

        expect(cookie).toBe('wilson');        
    });

    it("getDomElementById calls getElementById", function() {
            let spy = spyOn(document, 'getElementById');            
            getDomElementById();    
            expect(spy).toHaveBeenCalled();
    });

    it("queryApi function calls fetch", function() {
        let spy = spyOn(window, "fetch").and.returnValue(Promise.resolve());
        let data = queryApi();
        expect(spy).toHaveBeenCalled();
        expect(data).toBeObject();
    });

    it("queryApi function returns error", function() {
        let spy = spyOn(window, "fetch").and.returnValue(Promise.reject());
        let data = queryApi();
        expect(spy).toHaveBeenCalled();
        expect(data).toBeObject();
    });
});
