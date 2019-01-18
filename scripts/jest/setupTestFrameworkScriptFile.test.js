const mockEnzyme = {
    configure: jest.fn(),
}

const mockAdapter = function() {}

jest.mock('enzyme', () => mockEnzyme)
jest.mock('enzyme-adapter-react-16', () => mockAdapter)

describe('setupTestFrameworkScriptFile', () => {
    beforeEach(() => {
        require('./setupTestFrameworkScriptFile')
    })

    it('configures the enzyme adapter', () => {
        expect(mockEnzyme.configure).toHaveBeenCalledWith({
            adapter: expect.any(mockAdapter),
        })
    })
})
