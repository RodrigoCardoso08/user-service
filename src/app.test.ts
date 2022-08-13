const expressMock = { use: jest.fn()};
import bodyParser from "body-parser";
import { App } from "./app"

jest.mock('express', () => () => expressMock);
jest.mock('body-parser', () => bodyParserMock);
jest.mock('cors', () => corsMock);
jest.mock('./controller/user-controller');

describe("App tests", () =>{
    test('should create and call setConfig method properly', () => {
        //act
        const myApp = new App();

        // assert
        expect(myApp.server.use).toBeCalledTimes(3);
        expect(expressMock.use).toHaveBeenNthCalledWith(1, JSON_MOCK);
        expect(expressMock.use).toHaveBeenCalledWith(2, URL_ENCODED_MOCK);
        expect(expressMock.use).toHaveBeenNthCalledWith(3, CORS_RETURN_MOCK);
        expect(bodyParserMock.json).toBeCalledWith(JSON_MOCK);
        expect(bodyParserMock.urlencoded).toBeCalledWith(URL_ENCODED_MOCK);
    });
});