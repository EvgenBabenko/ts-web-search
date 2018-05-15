const formatTypes: any = {
    'text': (responce: any) => responce.text(),
    'json': (responce: any) => responce.json(),
    'test': () => console.log("Test function is working"),
    'default': (responce: any) => responce.json(),
};

export default formatTypes;