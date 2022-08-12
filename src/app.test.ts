const expressMock = { use: jest.fn()};
import { App } from "./app"

jest.mock('express', () => () => expressMock);

describe("App tests", () =>{
    test('should create and call setConfig method properly', () => {

        const myApp = new App();

        expect(myApp.server.use).toBeCalledTimes(3);
        
    });
});