const customGlobal = global as any;

customGlobal.fetchMock = () => 'setupJest';
